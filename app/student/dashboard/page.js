"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import supabase from "../../authCompany";
import { useRouter } from "next/navigation";
import ApplicantDetails from "@/app/components/ApplicantDetails";
import { HiPencilAlt } from "react-icons/hi";
import { useGlobalContext } from '../../GlobalContext'
import Header from "../components/header"
import OA from "./OA/page";
import Sidebar from "../components/sidebar";


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

  const state = useGlobalContext();
  console.log(state)
  const [renderOA, setRenderOA] = useState(false);
  const handleClick = () => {
    setRenderOA(true);
  };
  const router = useRouter();
  const [status, setStatus] = useState();
  const [jobs, setJobs] = useState([]);
  const [supabaseid, setSupabaseid] = useState();
  const [applicantWithID, setApplicantWithID] = useState();

  useEffect(() => {
    getAllJobs().then((jobs) => setJobs(jobs.jobs));
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
      } else {
        const obj = await getApplicant(user.id);
        setSupabaseid(user.id);
        setApplicantWithID(obj.applicants);
        setStatus(obj.applicants === null);
      }
    };
    fetchUser();
  }, []);

  const handleApplication = async (jobId) => {
    try {
      const updatedres = applicantWithID;
      updatedres.jobsApplied.push(jobId);

      const currJobs = jobs.filter((t) => t._id === jobId);
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

  const handleOA = (jobId) => {
    router.push(`/OA/${jobId}`);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("/");
  };
  // console.log(state.entity_id);

  return (

    <div>
      {status && <ApplicantDetails />}
      {!status && (
        <>
          <Header />
          <Link href="/student/dashboard/resume">Upload Resume</Link>
          <Link href="/student/dashboard/OA">
            <button style={{ backgroundColor: 'black', color: 'white' }}>OA</button>
          </Link>

          <Sidebar />
          <div>
            {jobs.map((t) => (
              <div
                key={t._id}
              >
                <div className="w-[903px] h-[121px] py-0.5 justify-start items-start gap-4 inline-flex">
                  <div className="justify-start items-start gap-[509px] flex">
                    <div className="justify-start items-start gap-4 flex">
                      <div className="w-[116px] h-[116px] relative">
                        <div className="w-[116px] h-[116px] left-0 top-0 absolute bg-stone-50 rounded-lg" />
                        <img className="w-[116px] h-[116px] left-0 top-0 absolute rounded-lg" src="https://via.placeholder.com/116x116" />
                      </div>
                      <div className="flex-col justify-start items-start  inline-flex">
                        <div className="text-zinc-900 text-xl font-bold font-['Inter']">{t.title}</div>
                        <div className="justify-start items-center gap-1 flex">
                          <p className="text-neutral-500 text-base font-normal font-['Inter']">description</p>

                          <div className="w-1 h-1 bg-neutral-500 rounded-full" />
                          <div className="text-neutral-500 text-base font-normal font-['Inter']">{t.description}</div>
                          {/* <div className="w-1 h-1 bg-neutral-500 rounded-full" /> */}
                        </div>
                        <div className="justify-start items-center gap-1 flex">
                          <p className="text-neutral-500 text-base font-normal font-['Inter']">companyid</p>

                          <div className="w-1 h-1 bg-neutral-500 rounded-full" />
                          <p className="text-neutral-500 text-base font-normal font-['Inter']">{t.companyid}</p>
                          {/* <div className="w-1 h-1 bg-neutral-500 rounded-full" /> */}
                        </div>
                        <div className="justify-start items-center gap-1 flex">
                          <div className="text-neutral-500 text-base font-normal font-['Inter']">  <div className="text-neutral-500 text-base font-normal font-['Inter']"><button onClick={() => handleApplication(t._id)}>
                            Apply Now
                          </button></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
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
