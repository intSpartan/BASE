"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/Header_Student";
import Footer from "../../components/Footer";
import TableOne from "../components/jobdetails";
import { useGlobalContext } from "../../GlobalContext";

const Profile = () => {
  const state = useGlobalContext();
  const [applicantData, setApplicantData] = useState(null);
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
        if (res.ok) {
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
    <div className="min-h-screen bg-gray-50 text-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-4xl font-bold mb-4">
              {applicantData?.name?.charAt(0) || "U"}
            </div>
            <h1 className="text-3xl font-bold text-center">
              {applicantData?.name || "User Name"}
            </h1>
          </section>

          {/* About Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">
                  Location
                </p>
                <p className="text-lg font-medium">
                  {applicantData?.location || "Pune, India"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">
                  Interests
                </p>
                <p className="text-lg font-medium">
                  {applicantData?.interests || "Reading, Gaming"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">
                  Skills
                </p>
                <p className="text-lg font-medium">
                  {applicantData?.skills || "Data science, Design"}
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">
                  School
                </p>
                <p className="text-lg font-medium">
                  {applicantData?.school || "Spicer Public School"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">
                  Qualification
                </p>
                <p className="text-lg font-medium">
                  {applicantData?.qualification || "12th HSC"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">
                  College
                </p>
                <p className="text-lg font-medium">
                  {applicantData?.college || "N/A"}
                </p>
              </div>
            </div>
          </section>

          {/* Job Details Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <TableOne jobs={jobDetails} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;

