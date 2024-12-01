"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "../../authCompany";
import { useGlobalContext } from "../../GlobalContext";
import Header_Student from "../../components/Header_Student";
import Footer from "../../components/Footer";
import Sidebar from "../components/sidebar";
import Jobcard from "../components/jobcard";
import Blog from "../components/blog";
import ApplicantDetails from "../../components/ApplicantDetails";

const interviewLink = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/interview/applicant/${id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch interview links");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching interview links:", error);
    return [];
  }
};

const getAllJobs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/jobs", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }

    return await res.json();
  } catch (error) {
    console.error("Error loading jobs:", error);
    return { jobs: [] };
  }
};

const Dashboard = () => {
  const state = useGlobalContext();
  const router = useRouter();
  const [status, setStatus] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [supabaseid, setSupabaseid] = useState(null);
  const [applicantWithID, setApplicantWithID] = useState(null);
  const [interviewLinks, setInterviewLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const Preloader = () => (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );

  useEffect(() => {
    const fetchJobs = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const allJobs = await getAllJobs();
        const newJobs = allJobs.jobs.filter(
          (job) => !job.applicantsApplied.includes(user.id)
        );
        setJobs(newJobs);
      }
    };
    fetchJobs();
  }, []);

  useLayoutEffect(() => {
    const getApplicant = async (id) => {
      try {
        const res = await fetch(`http://localhost:3000/api/applicants/${id}`, {
          cache: "no-store",
        });
        const result = await res.json();
        setStatus(result.applicants === null);
        return result;
      } catch (error) {
        console.error("Error loading applicant:", error);
        return null;
      }
    };

    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setSupabaseid(user.id);
        const obj = await getApplicant(user.id);
        if (obj && obj.applicants) {
          setApplicantWithID(obj.applicants._id);
          setStatus(false);
          const links = await interviewLink(obj.applicants._id);
          setInterviewLinks(Array.isArray(links) ? links : []);
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {status ? (
        <ApplicantDetails />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header_Student />
          <div className="flex-grow container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="lg:w-1/4">
                <Sidebar />
              </aside>
              <main className="lg:w-1/2">
                <h2 className="text-2xl font-bold mb-6">Available Jobs</h2>
                <div className="space-y-6">
                  {jobs.map((job) => (
                    <Jobcard
                      key={job._id}
                      props={job}
                      applicantWithID={applicantWithID}
                      jobs={jobs}
                      supabaseId={supabaseid}
                    />
                  ))}
                </div>
              </main>
              <aside className="lg:w-1/4">
                <Blog />
              </aside>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Dashboard;

