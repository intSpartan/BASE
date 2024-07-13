import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

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
const jobcard = ({ props, applicantWithID, jobs, supabaseId }) => {
  const router = useRouter();
  const [apply, setApply] = useState("Apply Now");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleApply = (id, applicantWithID, jobs, supabaseId) => {
    setApply("Applied");
    setIsButtonDisabled(true);
    handleApplication(id, applicantWithID, jobs, supabaseId);
  };
  return (
    <div className="flex-col  border-2  bg-[#] rounded-lg shadow-lg my-4 py-2">
      <div className="flex m-3">
        <img src="portfolio .png" className="w-10 border-2 rounded-full h-8" />
        <div className="flex-col w-[370px] overflow-hidden ml-[10px] ">
          <h1 className="text-xl font-semibold">{props.title}</h1>
          <h2 className="text-[12px] font-medium">{props.companyid}</h2>
        </div>
        <div className="flex  justify-end w-1/2 text-white">
          <button
            className="border-2 text-sm h-12 mx-2 p-3 rounded-lg bg-green-600 shadow-xl"
            onClick={() => router.push(`/student/joblist/${props._id}`)}
          >
            View Details
          </button>
          <button
            className="border-2 text-sm h-12 mx-2 p-3 rounded-lg bg-green-600 shadow-xl"
            onClick={() =>
              handleApply(props._id, applicantWithID, jobs, supabaseId)
            }
            disabled={isButtonDisabled}
          >
            {apply}
          </button>
        </div>
      </div>

      <div className="mx-12 mb-4">
        <span className="text-sm font-light bg-[#EBEBEB] m-2 p-2 rounded-lg">
          React.js
        </span>
        <span className="text-sm font-light bg-[#EBEBEB] m-2 p-2 rounded-lg">
          NodeJS
        </span>
      </div>
    </div>
  );
};

export default jobcard;
