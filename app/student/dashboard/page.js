"use client";

import React, { useState, useEffect } from "react";
import supabase from "../../authCompany";
import { useRouter } from "next/navigation";
import ApplicantDetails from "@/app/components/ApplicantDetails";
import { HiPencilAlt } from "react-icons/hi";

const getApplicant = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/applicants/${id}`, {
      // method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return await res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const interviewLink = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/interview/applicant/${id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch interview links");
    }
    console.log("interview:", res);
    return await res.json();
  } catch (error) {
    console.log("error");
  }
};

const getAllJobs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/jobs", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return await res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Dashboard = () => {
  const router = useRouter();
  const [status, setStatus] = useState();
  const [jobs, setJobs] = useState([]);
  const [supabaseid, setSupabaseid] = useState();
  const [applicantWithID, setApplicantWithID] = useState();
  const [interviewLinks, setInterviewLinks] = useState([]); // New state for interview links

  useEffect(() => {
    getAllJobs().then((jobs) => setJobs(jobs.jobs));
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setSupabaseid(user.id);
        const obj = await getApplicant(user.id);
        console.log(obj);
        setApplicantWithID(obj ? obj.applicants : null);
        setStatus(!obj || obj.applicants === null);
        const links = await interviewLink(obj.applicants._id);
        // Ensure interviewLinks is always an array
        setInterviewLinks(Array.isArray(links) ? links : []); // Update state with fetched interview links or an empty array
      }
    };
    fetchUser();
  }, []);

  const handleApplication = async (jobId) => {
    try {
      const updatedres = applicantWithID;
      updatedres.jobsApplied.push(jobId);

      const currJobs = jobs.filter((t) => t._id === jobId);
      // const applicant_id = applicantWithID._id;
      currJobs[0].applicantsApplied.push(supabaseid);
      console.log(currJobs[0].applicantsApplied);

      const res = await fetch(
        `http://localhost:3000/api/applicants/${supabaseid}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ updatedres }),
        }
      );

      const res_jobs = await fetch(`http://localhost:3000/api/jobs/${jobId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ curr_job: currJobs[0] }),
      });

      if (!res_jobs.ok) {
        console.log("Not updated");
      } else {
        alert("Job Applied");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOA = () => {
    router.push("/OA");
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div>
      {interviewLinks.length > 0 && (
        <div className="m-5 top-16 right-5 md:right-10 lg:right-16 xl:right-20 2xl:right-24 w-72 bg-white shadow-xl rounded-lg z-50">
          <div className="bg-blue-600 text-white text-lg font-semibold p-3 rounded-t-lg">
            Interview Links
          </div>
          <div className="max-h-96 overflow-y-auto">
            {interviewLinks.map((link) => (
              <a
                key={link.jobId}
                href={link.applicantInterviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 border-b border-gray-200 hover:bg-blue-50 text-gray-800"
              >
                {link.jobTitle}
              </a>
            ))}
          </div>
        </div>
      )}
      {status && <ApplicantDetails />}
      {!status && (
        <>
          <div>
            {jobs.map((t) => (
              <div
                key={t._id}
                className="p-4 border border-slate-300 my-3 flex justify-between items-start rounded-md"
              >
                <div>
                  <h2 className="font-bold text-2xl">{t.title}</h2>
                  <div>{t.description}</div>
                  <div>{t.companyid}</div>
                  <div>{t.curr_state}</div>
                  <button onClick={() => handleApplication(t._id)}>
                    Apply Now
                  </button>
                  <button onClick={handleOA}>OA</button>
                </div>

                <div className="flex gap-2">
                  <HiPencilAlt id={t._id} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <button onClick={signOut}>Sign Out</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
