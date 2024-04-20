"use client";

import Header from "../../components/Header_Student";
import TableOne from "../components/jobdetails";
import { useGlobalContext } from "@/app/GlobalContext";
import Footer from "@/app/components/Footer";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
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
          // Handle error if needed
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
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative rounded-full overflow-hidden aspect-square h-min shadow-lg">
              <Avatar size={100} icon={<UserOutlined />} />
            </div>
            <h1 className="text-2xl font-bold text-center mt-4">
              {applicantData && applicantData.name}
            </h1>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  Location
                </p>
                <p className="text-sm text-black font-medium">
                  {applicantData?.location || "Pune, India"}
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  Interests
                </p>
                <p className="text-sm text-black font-medium">
                  {applicantData?.interests || "Reading, Gaming"}
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  Skills
                </p>
                <p className="text-sm text-black font-medium">
                  {applicantData?.skills || "Data science, Design"}
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Education</h2>
            <div>
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  School
                </p>
                <p className="text-sm text-black font-medium">
                  {applicantData?.school || "Spicer Public School"}
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  Qualification
                </p>
                <p className="text-sm text-black font-medium">
                  {applicantData?.qualification || "12th HSC"}
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-400 font-medium mb-1">
                  College
                </p>
                <p className="text-sm text-black font-medium">
                  {applicantData?.college || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Job Details Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <TableOne jobs={jobDetails} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
