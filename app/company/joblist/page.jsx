"use client";

import supabase from "@/app/authCompany";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";

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

export default function JobList() {
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

  return (
    <div className="bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {filteredJobs.map((t) => (
          <div
            key={t._id}
            className="p-6 border border-gray-300 shadow-md rounded-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-neutral-50"
          >
            <div>
              <h2
                className="font-bold text-xl text-blue-600 cursor-pointer hover:underline"
                onClick={() => handleJob(t._id)}
              >
                {t.title}
              </h2>
              <p className="text-gray-700 mt-2">{t.description}</p>
              <div className="text-sm text-gray-500 mt-2">
                State: {t.curr_state}
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <HiPencilAlt
                id={t._id}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
