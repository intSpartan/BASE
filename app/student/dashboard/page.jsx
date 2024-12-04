"use client";

import ApplicantDetails from "../../components/ApplicantDetails";
import Footer from "../../components/Footer";
// import { useRouter } from "next/navigation";
import supabase from "../../authCompany";
// import { useGlobalContext } from "@/context/GlobalContext";
import Header_Student from "../../components/Header_Student";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Blog from "../components/blog";
import JobCard from "../components/jobcard";
import Sidebar from "../components/sidebar";
import { Briefcase, Users, FileCheck } from "lucide-react";
import React, { useState, useEffect , useLayoutEffect } from "react";

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
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [interviewLinks, setInterviewLinks] = useState([]);
  const [applicantWithID, setApplicantWithID] = useState(null);
  const [supabaseid, setSupabaseId] = useState(null);

  const Preloader = () => (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  useEffect(() => {
    const fetchJobs = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
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
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setSupabaseId(user.id);
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
    <div className="min-h-screen bg-gray-100">
      {status ? (
        <ApplicantDetails />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header_Student />
          <div className="flex flex-grow">
          <Sidebar className="flex-shrink-0 h-full" />
            <main className="flex-1 overflow-y-auto p-6">
              <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                  Dashboard
                </h1>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Applications
                      </CardTitle>
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{jobs.length}</div>
                      <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Interviews Scheduled
                      </CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {interviewLinks.length}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +180.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Completed Assessments
                      </CardTitle>
                      <FileCheck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">7</div>
                      <p className="text-xs text-muted-foreground">
                        +19% from last month
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                      Available Jobs
                    </h2>
                    <div className="space-y-6">
                      {jobs.map((job) => (
                        <JobCard
                          key={job._id}
                          props={job}
                          applicantWithID={applicantWithID}
                          jobs={jobs}
                          supabaseId={supabaseid}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <Blog />
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
