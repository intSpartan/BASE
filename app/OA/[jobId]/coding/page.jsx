"use client"

import React from 'react'
import { useRouter } from "next/navigation";

const fetchOA = async (jobId) => {
  try {
    const res = await fetch(`http://localhost:3000/api/jobs/${jobId}/OA`, {
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
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


const CodingQuestions = async ({ params }) => {

  const router = useRouter();



  const jobInfo = await fetchOA(params.jobId);

  console.log()



  const handleQ = () => {
    router.push(`/OA/${params.jobId}/editor`)
  }


  const handlesubmit = () => {
    alert("Test Finished")
    router.push(`/student/dashboard`)
  }

  return (

    <div>
      <button onClick={handleQ}>
        Questions 1
      </button>
      {jobInfo.job.coding_questions === 2 && <>
        <button onClick={handleQ}>
          Questions 2
        </button>
      </>}
      <button onClick={handlesubmit}>Finish Test</button>
    </div>
  )
}

export default CodingQuestions
