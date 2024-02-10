"use client"

import React from 'react'
import { useRouter } from "next/navigation";

const QuestionSelector = (props) => {

    const router = useRouter();

    // console.log(props.jobId);
    const jobId = props.jobId.jobId

    const handleQ1 = () => {
        console.log(props.jobId);
        router.push(`/OA/${jobId}/Q1/editor`)
    }
    const handleQ2 = () => {
        router.push(`/OA/${jobId}/Q2/editor`)
    }
    const handlesubmit = () => {
        alert("Test Finished")
        router.push(`/student/dashboard`)
        localStorage.clear();
    }

    // console.log(props);

    return (

        <div>
            <button onClick={handleQ1}>
                Questions 1
            </button>
            {props.jobInfo.job.coding_questions === 2 && <>
                <button onClick={handleQ2}>
                    Questions 2
                </button></>}
            <button onClick={handlesubmit}>Finish Test</button>
        </div>
    )
}

export default QuestionSelector
