"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { HiPencilAlt, HiCalendarAlt, HiClipboardList } from "react-icons/hi";

const getJobs = async () => {
  try {
    const res = await fetch("/api/jobs", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }

    return await res.json();
  } catch (error) {
    console.log("Error loading jobs: ", error);
  }
};

const Preloader = () => {
  return (
    <div className="flex h-[550px] justify-center items-center">
      <div className="border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default function ClosedJobsList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs().then((jobs) => setJobs(jobs.jobs));
    setLoading(false);
  }, []);

  const filteredJobs = jobs.filter((job) => job.curr_state === "4");

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Closed Job Openings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">{job.title}</h2>
                  <HiPencilAlt
                    id={job._id}
                    className="text-gray-500 cursor-pointer"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">{job.description}</p>
                </div>

                <div className="flex items-center text-gray-500 mb-2">
                  <HiClipboardList className="mr-2" />
                  <span>
                    Reason:{" "}
                    {job.closeReason
                      ? job.closeReason
                      : "Currently not hiring!"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
