import React from 'react'
import { useState } from 'react'
// const getApplicant = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/applicants/${id}`, {
//       // method: "GET",
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     return await res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };

const handleApplication = async (jobId,applicantWithID,jobs,supabaseid) => {
  try {
    const updatedres = await (await fetch(`http://localhost:3000/api/applicants/${supabaseid}`)).json()
    console.log("update:",updatedres);
    updatedres.applicants.jobsApplied.push(jobId);
    console.log(jobId)

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
const jobcard = ({props,applicantWithID,jobs,supabaseId}) => {
  const [apply,setApply] = useState("Apply Now")
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleApply = (id,applicantWithID,jobs,supabaseId)=>{
    setApply("Applied");
    setIsButtonDisabled(true);
    handleApplication(id,applicantWithID,jobs,supabaseId)
}
  return (

    <div class="flex-col border-2  bg-[#FFFFFF] rounded-lg shadow-lg my-4">
      <div class="flex m-3">
        <img src="portfolio .png" class="w-10 border-2 rounded-full h-8" />
        <div class="flex-col px-4">
          <h1 class="text-xl font-semibold">{props.title}</h1>
          <h2 class="text-sm font-medium">{props.companyid}</h2>
        </div>
        <div class="flex justify-end w-3/4 text-white">
          <button
            class="border-2 text-sm h-12 mx-2 p-3 rounded-lg bg-green-600 shadow-xl"
          >
            View Details
          </button>
          <button
            class="border-2 text-sm h-12 mx-2 p-3 rounded-lg bg-green-600 shadow-xl"
            onClick={()=>handleApply(props._id,applicantWithID,jobs,supabaseId)} disabled={isButtonDisabled}
          >
            {apply}
          </button>
        </div>
      </div>
      
      <div class="mx-12 mb-4">
        <span class="text-sm font-light bg-[#EBEBEB] m-2 p-2 rounded-lg">
          React.js
        </span>
        <span class="text-sm font-light bg-[#EBEBEB] m-2 p-2 rounded-lg">
          NodeJS
        </span>
      </div>
    </div>
  )
}

export default jobcard
