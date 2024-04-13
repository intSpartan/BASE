"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import supabase from "../../authCompany";
import FormPage from "@/app/form/page";
import JobList from "../joblist/page";
import ClosedJobsList from "../closedjobs/page";
import Footer from "@/app/student/components/footer";
import Header_Company from "@/app/components/Header_Company";

const Dashboard = () => {
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("../");
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const companyID = searchParams.get("id");

  const [selectedOption, setSelectedOption] = useState("1");

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "1":
        return <FormPage />;
      case "2":
        return (
          <JobList/>
        );
      case "3":
        return <ClosedJobsList />;
      default:
        return null;
    }
  };


  return (
    <div>
      <Header_Company/>
      <nav class="bg-neutral-200 p-4">
        <div class="flex justify-between items-center">
          <div class="flex w-full space-x-4">
            <button class="w-full text-black focus:outline-none border-r-4 border-black" onClick={() => setSelectedOption("1")}>Add a Job</button>
            <button class="w-full text-black focus:outline-none border-r-4 border-black" onClick={() => setSelectedOption("2")}>Active Jobs</button>
            <button class="w-full text-black focus:outline-none" onClick={() => setSelectedOption("3")}>Closed Jobs</button>
          </div>
        </div>
      </nav>
      <div>
        {renderSelectedComponent()}
      </div>
      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
