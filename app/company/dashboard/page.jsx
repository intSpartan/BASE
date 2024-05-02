"use client";

import CompanyForm from "@/app/components/CompanyForm";
import supabase from "../../authCompany";
import ClosedJobsList from "../closedjobs/page";
import JobList from "../joblist/page";
import Footer from "@/app/components/Footer";
import Header_Company from "@/app/components/Header_Company";
import FormPage from "@/app/form/page";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";



const getCompany = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/company/${id}`, {
      // method: "GET",
      cache: "no-store",
    });

    console.log(await res.json());

    return (res.status === 404);
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


const Dashboard = () => {
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("../");
  };

  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedOption, setSelectedOption] = useState("1");
  const [status, setStatus] = useState();
  const [object, setObject] = useState();

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "1":
        return <FormPage />;
      case "2":
        return <JobList />;
      case "3":
        return <ClosedJobsList />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/auth");
      } else {
        const obj = await getCompany(user.id);
        setStatus(obj)

      }
    };
    fetchUser();
    console.log(status);
  }, []);

  useEffect(() => {
  }, [status])


  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F3F4F6]">
      {status && <CompanyForm />}
      {!status && <div> <Header_Company />
        <nav class="bg-neutral-200 p-4">
          <div class="flex justify-between items-center">
            <div class="flex w-full space-x-4">
              <button
                class="w-full text-black focus:outline-none border-r-4 border-black"
                onClick={() => setSelectedOption("1")}
              >
                Add a Job
              </button>
              <button
                class="w-full text-black focus:outline-none border-r-4 border-black"
                onClick={() => setSelectedOption("2")}
              >
                Active Jobs
              </button>
              <button
                class="w-full text-black focus:outline-none"
                onClick={() => setSelectedOption("3")}
              >
                Closed Jobs
              </button>
            </div>
          </div>
        </nav>
        <div>{renderSelectedComponent()}</div>
      </div>}
      <Footer />
    </div>
  );
};

export default Dashboard;
