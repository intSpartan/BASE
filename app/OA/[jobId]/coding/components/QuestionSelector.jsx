"use client"

import {React, useState} from 'react'
import { useRouter } from "next/navigation";
import Editor from "../../[qno]/editor/page.jsx"

const QuestionSelector = (props) => {

    const router = useRouter();

    const jobId = props.jobId.jobId
    const qIndex = props.qIndex
    const [showEditor, setShowEditor] = useState(false);

    const handleQ1 = () => {
        console.log(props);
        showEditor ? setShowEditor(false) : setShowEditor(true)
    }
    const handlesubmit = () => {
        alert("Test Finished")
        router.push(`/student/dashboard`)
        localStorage.clear();
    }

    const CodingQuestionsPool = [
      'Q: Find the sum of all elements in an array: arr.reduce((sum, num) => sum + num, 0);',

      'Q: Find the maximum element in an array: Math.max(...arr);',

      'Q: Check if an array contains a specific element: arr.includes(target);',

      'Q: Reverse the elements of an array: arr.reverse();',

      'Q: Filter even numbers from an array: arr.filter(num => num % 2 === 0);',
    ];

    // console.log(props);

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-gray-200 p-4 space-y-4 fixed inset-y-0 left-0">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleQ1}>
          Question 1
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlesubmit}>
          Finish Test
        </button>
      </div>
      <div className="pl-72 p-8 flex-1">
        {showEditor && (
          <div>
            <div className="mt-2 p-2 bg-white shadow rounded">
              {CodingQuestionsPool[qIndex]}
            </div>
            <Editor jobId={jobId} />
          </div>
        )}
      </div>
    </div>
  )

}

export default QuestionSelector
