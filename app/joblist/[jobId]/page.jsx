"use client";

import AboutJob from "./components/AboutJob";
import ApplicantApplied from "./components/ApplicantApplied";
import OA_company from "./components/OA_company";
import Interview from "./components/Interview"

import { useState } from "react";

const TopBarComponent = ({ params }) => {
  const [selectedOption, setSelectedOption] = useState("1");

<<<<<<< HEAD
    const renderSelectedComponent = () => {
        switch (selectedOption) {
            case '1':
                return < AboutJob />;
            case '2':
                return <ApplicantApplied jobId={params.jobId} />;
            case '3':
                return <OA_company />;
            case '4':
                return <Interview jobId={params.jobId}/>;
            default:
                return null;
        }
    };
    // console.log(params.jobId)

    return (
        <div>
            <div className="content text-2xl m-4">{renderSelectedComponent()}</div>
            <div className="top-bar m-4">
                <button className="block" onClick={() => setSelectedOption('1')}>AboutJob</button>
                <button className="block" onClick={() => setSelectedOption('2')}>ApplicantApplied</button>
                <button className="block" onClick={() => setSelectedOption('3')}>OA </button>
                <button className="block" onClick={() => setSelectedOption('4')}>Interview </button>
            </div>
        </div>
    );
=======
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
        return <Interview />;
      default:
        return null;
    }
  };
  
  return (
    <div>
      <div className="top-bar">
        <button onClick={() => setSelectedOption("1")}>AboutJob</button>
        <button onClick={() => setSelectedOption("2")}>ApplicantApplied</button>
        <button onClick={() => setSelectedOption("3")}>OA </button>
        <button onClick={() => setSelectedOption("4")}>Interview </button>
      </div>
      <div className="content">{renderSelectedComponent()}</div>
    </div>
  );
>>>>>>> origin/OnlineAssessment
};

export default TopBarComponent;
