"use client";

import Header from "../components/header";
import TableOne from "../components/jobdetails";
import { useGlobalContext } from "@/app/GlobalContext";
import React, { useState, useEffect } from "react";

const Profile = () => {
  const state = useGlobalContext();
  const [applicantData, setApplicantData] = useState();
  const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    if (state) {
      const getApplicant = async () => {
        try {
          const res = await fetch(
            `http://localhost:3000/api/applicants/${state.state.entity_id}`,
            {
              method: "GET",
              cache: "no-store",
            }
          );

          if (!res.ok) {
            throw new Error("Failed to fetch the user details");
          } else {
            setApplicantData((await res.json()).applicants);
          }
        } catch (error) {
          console.log("Error loading user details: ", error);
        }
      };

      getApplicant();
    }
  }, [state]);

  useEffect(() => {
    const getJobDetails = async (jobId) => {
      try {
        const res = await fetch(`http://localhost:3000/api/jobs/${jobId}`, {
          method: "GET",
          cache: "no-store",
        });
        if (!res.ok) {
        } else {
          const ans = await res.json();
          return ans;
        }
      } catch (err) {
        console.log(`Error is: ${err} `);
      }
    };

    if (applicantData) {
      Promise.all(
        applicantData.jobsApplied.map(async (t) => {
          return getJobDetails(t);
        })
      ).then((jobsData) => {
        setJobDetails(jobsData);
      });
    }
  }, [applicantData]);

  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative rounded-full overflow-hidden w-32 h-32">
              <div className="absolute inset-0 bg-zinc-300"></div>
              <img
                src="https://via.placeholder.com/150x150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-center mt-4">
              {applicantData && applicantData.name}
            </h1>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  Location
                </p>
                <p className="text-sm text-black font-medium">Pune, India</p>
              </div>
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  Interests
                </p>
                <p className="text-sm text-black font-medium">
                  Reading, Gaming
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  Skills
                </p>
                <p className="text-sm text-black font-medium">
                  Data science, Design
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Education</h2>
            <div>
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  School
                </p>
                <p className="text-sm text-black font-medium">
                  Spicer Public School
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  Qualification
                </p>
                <p className="text-sm text-black font-medium">12th HSC</p>
              </div>
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  College
                </p>
                <p className="text-sm text-black font-medium">N/A</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <TableOne jobs={jobDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
