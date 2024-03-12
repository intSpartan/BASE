"use client";

import AboutJob from "./components/AboutJob";
import ApplicantApplied from "./components/ApplicantApplied";
import OA_company from "./components/OA_company";
import Interview from "./components/Interview"
import OA_Scores from "./components/OA_Scores";

import { useState } from "react";

const TopBarComponent = ({ params }) => {
  const [selectedOption, setSelectedOption] = useState("1");

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "1":
        return <AboutJob />;
      case "2":
        return (
          <ApplicantApplied jobId={params.jobId} functionality={"Shortlist"} />
        );
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
      <div className="top-bar">
        <button onClick={() => setSelectedOption("1")}>" "AboutJob </button>
        <button onClick={() => setSelectedOption("2")}>" "ApplicantApplied </button>
        <button onClick={() => setSelectedOption("3")}>" "OA </button>
        <button onClick={() => setSelectedOption("5")}>" "OA scores </button>
        <button onClick={() => setSelectedOption("4")}>" "Interview </button>
      </div>
      <div className="content">{renderSelectedComponent()}</div>
    </div>
  );
};

export default TopBarComponent;
