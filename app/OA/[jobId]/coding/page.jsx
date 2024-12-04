

import React from 'react'
import QuestionSelector from './components/QuestionSelector';


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

const CodingQuestions = async ({ params }) => {

  const jobInfo = await fetchOA(params.jobId);
  const qIndex = Math.floor(Math.random() * 5)

  return (
    <>
      {jobInfo && <QuestionSelector jobInfo={jobInfo} jobId={params} qIndex={qIndex}/>}
      {!jobInfo && <div>Loading...</div>}

    </>
  )

}

export default CodingQuestions
