import { useRouter } from "next/navigation";
import React, { useState } from "react";

const handleApplication = async (jobId, applicantWithID, jobs, supabaseid) => {
  try {
    const updatedres = await (
      await fetch(`http://localhost:3000/api/applicants/${supabaseid}`)
    ).json();
    console.log("update:", updatedres);
    updatedres.applicants.jobsApplied.push(jobId);
    console.log(jobId);

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
const JobCard = ({ props, applicantWithID, jobs, supabaseId }) => {
  const router = useRouter();
  const [apply, setApply] = useState("Apply Now");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleApply = (id, applicantWithID, jobs, supabaseId) => {
    setApply("Applied");
    setIsButtonDisabled(true);
    handleApplication(id, applicantWithID, jobs, supabaseId);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-4 transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {/* <img src="/placeholder.svg" alt="Company Logo" className="w-12 h-12 rounded-full mr-4" /> */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{props.title}</h2>
            <p className="text-sm text-gray-600">{props.companyName}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors"
            onClick={() => router.push(`/student/joblist/${props._id}`)}
          >
            View Details
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors ${
              isButtonDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
            onClick={() => handleApply(props._id, applicantWithID, jobs, supabaseId)}
            disabled={isButtonDisabled}
          >
            {apply}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">React.js</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">NodeJS</span>
      </div>
    </div>
  );
};

export default JobCard;

