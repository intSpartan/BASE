"use client";

import Footer from "../../../components/Footer";
import Header_Student from "../../../components/Header_Student";
import AI_Interview from "./AI/src/AI_Interview";
import Normal_Interview from "./normal_interviews";
import React, { useState, useEffect } from "react";

const OA = () => {
  const [selectedOption, setSelectedOption] = useState("1");

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "1":
        return <Normal_Interview />;
      case "2":
        return <AI_Interview />;
      default:
        return <Normal_Interview />;
    }
  };

  return (
    <div>
      <Header_Student />

      <div className="min-h-screen flex flex-col justify-between bg-[#F3F4F6]">
        <div>
          <nav className="bg-neutral-200 p-4">
            <div className="flex justify-between items-center">
              <div className="flex w-full space-x-4">
                <button
                  className="w-full text-black focus:outline-none border-r-4 border-black"
                  onClick={() => setSelectedOption("1")}
                >
                  Normal Interview
                </button>
                <button
                  className="w-full text-black focus:outline-none border-r-4 border-black"
                  onClick={() => setSelectedOption("2")}
                >
                  AI Interview
                </button>
              </div>
            </div>
          </nav>
          <div>{renderSelectedComponent()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OA;
