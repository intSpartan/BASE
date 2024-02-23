"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import for useRouter
import { v1 as uuid } from "uuid";

const ApplicantApplied = ({ jobId }) => {
  const router = useRouter();
  const [applicants, setApplicants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getApplicant = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/api/jobs/${jobId}`, {
          method: "GET",
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const job = await res.json();

        const applicantsData = await Promise.all(job.job.applicantsApplied.map(async (id) => {
          const response = await fetch(`http://localhost:3000/api/applicants/${id}`, {
            cache: "no-store",
          });
          if (!response.ok) {
            console.error(`Failed to fetch applicant with ID ${id}`);
            return null;
          }
          return response.json();
        }));
        console.log(applicantsData.filter(applicant => applicant !== null))
        setApplicants(applicantsData.filter(applicant => applicant !== null));
        console.log(applicants)
      } catch (error) {
        console.error("Error loading topics: ", error);
      }
      setIsLoading(false);
    };

    getApplicant();
  }, [jobId]); // Only jobId in dependency array


  return (
  <div>
    {isLoading ? (
      <p>Loading...</p> // Or any loading indicator you prefer
    ) : (
      applicants.map(({applicants}) => (
        <div key={applicants._id} className="p-4 border border-slate-300 my-3 flex flex-col justify-between items-start rounded-md">
          <h2 className="text-2xl">{applicants.name}</h2>
          <p>{applicants._id}</p>
          <p>{applicants.college}</p>
          <p>{applicants.cgpa}</p>
        </div>
      ))
    )}
  </div>
  );
};

export default ApplicantApplied;
