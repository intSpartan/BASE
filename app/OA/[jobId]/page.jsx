import React from 'react'
import HtmlQuiz from "../components/html"


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

const OA = async ({ params }) => {

  const jobInfo = await fetchOA(params.jobId);
  // console.log(jobInfo.job.mcqs);

  return (
    <>
      {jobInfo && <div>
        <HtmlQuiz jobId={params.jobId} mcqs={jobInfo.job.mcqs} codingquestions={jobInfo.job.coding_questions} />
      </div>}
      {!jobInfo && <div>Loading...</div>}
    </>
  )
}

export default OA
