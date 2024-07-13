import supabase from "@/app/authCompany";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  HiPencilAlt,
  HiLocationMarker,
  HiCurrencyDollar,
  HiBriefcase,
} from "react-icons/hi";

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
    <div class="flex h-[550px] justify-center items-center">
      <div class="border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default function JobList() {
  const [compId, setCompId] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
      } else {
        setCompId(user.id);
        setLoading(!loading);
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

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Available Job Openings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-between items-start mb-4">
                <h2
                  className="text-xl font-semibold text-blue-600 cursor-pointer hover:underline"
                  onClick={() => handleJob(job._id)}
                >
                  {job.title}
                </h2>
                <HiPencilAlt
                  id={job._id}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                />
              </div>
              <div className="flex items-center text-gray-700 mb-2">
                <HiLocationMarker className="mr-2 text-blue-500" />
                <span>{job.locations}</span>
              </div>
              <div className="flex items-center text-gray-700 mb-2">
                <HiCurrencyDollar className="mr-2 text-blue-500" />
                <span>${job.stipendSalary}</span>
              </div>
              <div className="flex items-center text-gray-700 mb-2">
                <HiBriefcase className="mr-2 text-blue-500" />
                <span>{job.type ? job.type : "Intern"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
