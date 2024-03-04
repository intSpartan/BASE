"use client";

import Link from "next/link";
import supabase from "../authCompany";
import { HiPencilAlt } from "react-icons/hi";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const getJobs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/jobs", {
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

export default function TopicsList() {
  const [compId, setCompId] = useState([]);
  const [jobs, setJobs] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
      } else {
        setCompId(user.id);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    getJobs().then((jobs) => setJobs(jobs.jobs));
  }, []);

  const filteredJobs = jobs.filter(
    (t) => t.companyid === compId && t.curr_state != "4"
  );

  const handleJob = (jobId) => {
    router.push(`joblist/${jobId}`);
  };

  console.log(resumes);

  return (
    <>
      {filteredJobs.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between items-start rounded-md"
        >
          <div>
            <h2 className="font-bold text-2xl" onClick={() => handleJob(t._id)}>
              {t.title}
            </h2>
            <div>{t.description}</div>
            <div>{t.curr_state}</div>
          </div>

          <div className="flex gap-2">
            <HiPencilAlt id={t._id} />
          </div>
        </div>
      ))}
    </>
  );
}
