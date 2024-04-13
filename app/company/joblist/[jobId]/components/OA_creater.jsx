import React, { useState } from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
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
    <div className="flex-col">
      <div className="bg-neutral-50 h-100px flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Online Assessment
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Design the Online Assessment that would be sent to the candidates
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
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
              </Typography>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
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
              </Typography>
              {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              /> */}
            </div>
            <br></br>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I confirm the questions
  
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6 bg-neutral-950" fullWidth onClick={handleOA}>
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default OA_creater;
