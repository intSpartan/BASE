"use client";

import AboutJob from "./components/AboutJob";
import ApplicantApplied from "./components/ApplicantApplied";
import Interview from "./components/Interview";
import OA_Scores from "./components/OA_Scores";
import OA_company from "./components/OA_company";
import Sidebar from "./components/Sidebar";
import { cache, useEffect, useState } from "react";

const TopBarComponent = ({ params }) => {
  const [selectedOption, setSelectedOption] = useState("1");

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "1":
        return <AboutJob />;
      case "2":
        return <ApplicantApplied jobId={params.jobId} />;
      case "3":
        return <OA_company jobId={params.jobId} />;
      case "4":
        return <Interview jobId={params.jobId} />;
      case "5":
        return <OA_Scores jobId={params.jobId} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <Sidebar jobId={params.jobId}>

          <div className="content">{renderSelectedComponent()}</div>
        </Sidebar>
      </div>
    </div>
  );
};

export default TopBarComponent;
