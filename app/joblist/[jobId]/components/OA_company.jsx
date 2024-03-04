"use client";

import React from "react";
import ApplicantApplied from "./ApplicantApplied";
import OA_creater from "./OA_creater";

const OA_company = (props) => {
  return (
    <div>
      <OA_creater jobId={props.jobId} />
      <ApplicantApplied jobId={props.jobId} functionality={"Send OA"} />
    </div>
  );
};

export default OA_company;
