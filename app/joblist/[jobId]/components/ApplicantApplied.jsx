<<<<<<< HEAD
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

=======
import React, { useEffect, useState } from "react";
import supabase from "@/app/authCompany";
import { useParams } from "next/navigation";

const updateOAList = async (applicant_id, jobId) => {
  // console.log(applicant_id);
  const res_jobs = await fetch(
    `http://localhost:3000/api/jobs/${jobId}/OA_selection`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ candidate_id: applicant_id }),
    }
  );
};

const ApplicantApplied = ({ ...props }) => {
  const params = useParams();
  const { jobId } = params;
  const [applicants, setApplicants] = useState([]);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const getApplicant = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/jobs/${props.jobId}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const job = await res.json();
        const applicantsData = [];

        for (const id of job.job.applicantsApplied) {
          const response = await fetch(
            `http://localhost:3000/api/applicants/${id}`,
            {
              cache: "no-store",
            }
          );
          if (!response.ok) {
            console.error(`Failed to fetsch applicant with ID ${id}`);
            continue;
          }
          const applicant = await response.json();
          applicantsData.push(applicant);
        }
        setApplicants(applicantsData);
        console.log(applicantsData);
      } catch (error) {
        console.log("Error loading topics: ", error);
      }
    };

    getApplicant();
  }, [props.jobId]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("resumes")
          .list("", { limit: 1000 });

        if (error) {
          console.error("Error fetching resumes:", error);
          return;
        }
        setResumes(data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };
    fetchResumes();
  }, []);
  console.log(resumes);
  const handleApplication = async (applicant_id) => {
    if (props.functionality === "Shortlist") {
    }
    if (props.functionality === "Send OA") {
      const res = await updateOAList(applicant_id, jobId);
    }
  };

  const downloadAllResumes = async () => {
    for (const file of resumes) {
      await downloadResume(file);
    }
  };

  const downloadResume = async (file) => {
    try {
      const { data, error } = await supabase.storage
        .from("resumes")
        .download(file.name);

      if (error) {
        console.error("Error downloading resume:", error);
        return;
      }
      const blob = new Blob([data]);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = file.name;
      link.click();
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  const downloadUsingLoginid = async (loginid) => {
    const { data, error } = await supabase.storage
      .from("resumes")
      .download(`${loginid}.pdf`);

    if (error) {
      alert("No Resume Uploaded by the Candidate", error);
      return;
    }
    const blob = new Blob([data]);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${loginid}.pdf`;
    link.click();
  };

  return (
    <div>
      <>
        <h1>Resumes</h1>
        <button onClick={downloadAllResumes}>Download All Resumes</button>
        {applicants.map((t) => (
          <div
            key={t.applicants._id}
            className="p-4 border border-slate-300 my-3 flex justify-between items-start rounded-md"
          >
            <div>
              <h2 className="text-2xl">{t.applicants.name}</h2>
            </div>
            <div>
              <p>{t.applicants._id}</p>
            </div>
            <div>
              <p>{t.applicants.college}</p>
            </div>
            <div>
              <p>{t.applicants.cgpa}</p>
            </div>
            <div>
              <button onClick={() => handleApplication(t.applicants._id)}>
                {props.functionality}
              </button>
            </div>
            <div>
              <button
                onClick={async () => {
                  downloadUsingLoginid(t.applicants.loginid);
                }}
              >
                Download Resume
              </button>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

>>>>>>> origin/OnlineAssessment
export default ApplicantApplied;
