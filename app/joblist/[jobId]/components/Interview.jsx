"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import for useRouter
import { v1 as uuid } from "uuid";

const ApplicantApplied = ({ jobId }) => {
  const router = useRouter();
  const [applicants, setApplicants] = useState([]);
  const [interviewLinks, setInterviewLinks] = useState({});
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

        const interviewRes = await fetch(`http://localhost:3000/api/interview/job/${jobId}`, {
          method: "GET",
          cache: "no-store",
        });

        if (!interviewRes.ok) throw new Error("Failed to fetch interview links");
        const interviewData = await interviewRes.json();
        // console.log(interviewData)
        setInterviewLinks(interviewData || {});

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
        // console.log(applicantsData.filter(applicant => applicant !== null))
        setApplicants(applicantsData.filter(applicant => applicant !== null));
        // console.log(applicants)
      } catch (error) {
        console.error("Error loading topics: ", error);
      }
      setIsLoading(false);
    };

    getApplicant();
  }, [jobId]); // Only jobId in dependency array

  const handleSendInterview = async (applicantId) => {
    const meetingLink = `/room/${uuid()}`;
    try {
      const res = await fetch(`/api/interview/job/${jobId}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicantID: applicantId,
          link: meetingLink,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send interview invitation");
      }

      setInterviewLinks(prev => ({ ...prev, [applicantId]: meetingLink }));
      alert(`Interview link sent to applicant ${applicantId}`);
    } catch (error) {
      console.error("Error sending interview: ", error);
    }
  };

  const handleUnsendInterview = async (applicantId) => {
    const res = await fetch(`/api/interview/job/${jobId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({applicantID: applicantId})
    });
    if (!res.ok) {
      throw new Error("Failed to send interview invitation");
    }

    setInterviewLinks(prev => {
      // Create a new object excluding the applicantId that was removed
      const {[applicantId]: value, ...remaining} = prev;
      return remaining;
    });

    alert(`Interview link has been deleted from applicant ${applicantId}`);
  }

  return (
  <div>
    {isLoading ? (
      <p>Loading...</p> // Or any loading indicator you prefer
    ) : (
      applicants.map(({applicants}) => (
        <div key={applicants._id} className="p-4 border border-slate-300 my-3 flex flex-col justify-between items-start rounded-md">
          <h2 className="text-2xl">{applicants.name}</h2>
          {interviewLinks[applicants._id] ? (
                <>
            <button className="text-xl border border-black p-1 rounded-lg" onClick={() => router.push(interviewLinks[applicants._id])}>
              Attend Interview
            </button>
            <button className="text-xl border border-black p-1 rounded-lg" onClick={() => handleUnsendInterview(applicants._id)}>
              Unsend Interview
            </button>
                </>
          ) : (
            <button className="text-xl border border-black p-1 rounded-lg" onClick={() => handleSendInterview(applicants._id)}>
              Send Interview
            </button>
          )}
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
