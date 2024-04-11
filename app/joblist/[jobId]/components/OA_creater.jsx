import React, { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";


const OA_creater = (props) => {
  const [mcq, setMcq] = useState(5);
  const [codingquestions, setCodingQuestions] = useState(1);

  const handlemcq = (e) => {
    setMcq(parseInt(e.target.value, 10));
  };

  const handlecodingquestions = (e) => {
    setCodingQuestions(parseInt(e.target.value, 10));
  };

  const handleOA = async () => {
    const res = await fetch(
      `http://localhost:3000/api/jobs/${props.jobId}/OA`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ mcqs: mcq, coding_questions: codingquestions }),
      }
    );
    alert("OA Created");
  };
  console.log(props.jobId);
  return (
    <div>  
      <label>
        MCQs :
        <select value={mcq} onChange={handlemcq}>
          {[...Array(11).keys()].map((value) => (
            <option key={value} value={value + 5}>
              {value + 5}
            </option>
          ))}
        </select>
      </label>

      <br />

      <label>
        Coding Questions :
        <select value={codingquestions} onChange={handlecodingquestions}>
          {[1, 2].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleOA}>Confirm</button>
    </div>
  );
};

export default OA_creater;
