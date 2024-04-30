"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import supabase from "../../authCompany";
import { useRouter } from "next/navigation";
import ApplicantDetails from "@/app/components/ApplicantDetails";
import { useGlobalContext } from "../../GlobalContext";
import Header_Student from "@/app/components/Header_Student";
import Footer from "@/app/components/Footer";
import Jobcard from "../components/jobcard";
import OA from "./OA/page";
import Interview from "./Interview/page";
import Sidebar from "../components/sidebar";
import Blog from "../components/blog"
import { RefreshSharp } from "@mui/icons-material";
// const getApplicant = async (id) => {
//     try {
//         const res = await fetch(`http://localhost:3000/api/applicants/${id}`, {
//             // method: "GET",
//             cache: "no-store",
//         });
//         // const result = await res.json().applicants;
//         console.log(await res.json());
//         setStatus(res.status === 404)
//         return (await res.json())
//     } catch (error) {
//         console.log("Error loading topics: ", error);
//     }
// };

const interviewLink = async (id) => {
    try {
        const res = await fetch(
            `http://localhost:3000/api/interview/applicant/${id}`
        );
        if (!res.ok) {
            throw new Error("Failed to fetch interview links");
        }
        console.log("interview:", res);
        return await res.json();
    } catch (error) {
        console.log("error");
    }
};

const getAllJobs = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/jobs", {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return await res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

const Dashboard = () => {
    const state = useGlobalContext();
    // console.log(state);
    const [renderOA, setRenderOA] = useState(false);
    const handleClick = () => {
        setRenderOA(true);
    };
    const router = useRouter();
    const [status, setStatus] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [supabaseid, setSupabaseid] = useState();
    const [applicantWithID, setApplicantWithID] = useState();
    const [interviewLinks, setInterviewLinks] = useState([]); // New state for interview links

    useEffect(() => {
        let newJobs = [];
        getAllJobs().then(async (allJobs) => {
            console.log("jobs:", allJobs)
            const {
                data: { user },
            } = await supabase.auth.getUser();
            if (user) {
                console.log("id", user.id)
                allJobs.jobs.filter((job) => {
                    if (!job.applicantsApplied.includes(user.id)) {
                        newJobs.push(job)
                    }
                })
                setJobs(newJobs);

            }
        });
    }, [])
    useLayoutEffect(() => {
        const getApplicant = async (id) => {
            try {
                const res = await fetch(`http://localhost:3000/api/applicants/${id}`, {
                    // method: "GET",
                    cache: "no-store",
                });
                const result = await res.json();
                console.log(result);
                // console.log(await res.json());
                setStatus(result.applicants === null)
                return (result)
            } catch (error) {
                console.log("Error loading topics: ", error);
            }
        };
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            if (user) {
                setSupabaseid(user.id);
                // console.log(user.id);

                const obj = await getApplicant(user.id);
                // setStatus(obj)
                // console.log("object", obj);
                if (!status) {
                    setApplicantWithID(obj ? obj.applicants._id : null);
                    setStatus(!obj || obj.applicants === null);
                    const links = await interviewLink(obj.applicants._id);
                    // Ensure interviewLinks is always an array
                    setInterviewLinks(Array.isArray(links) ? links : []); // Update state with fetched interview links or an empty array

                }
            }
        };
        fetchUser();
    }, []);

    // const handleApplication = async (jobId) => {
    //   try {
    //     const updatedres = applicantWithID;
    //     updatedres.jobsApplied.push(jobId);

    //     const currJobs = jobs.filter((t) => t._id === jobId);
    //     currJobs[0].applicantsApplied.push(supabaseid);
    //     console.log(currJobs[0].applicantsApplied);

    //     const res = await fetch(
    //       `http://localhost:3000/api/applicants/${supabaseid}`,
    //       {
    //         method: "PUT",
    //         headers: {
    //           "Content-type": "application/json",
    //         },
    //         body: JSON.stringify({ updatedres }),
    //       }
    //     );

    //     const res_jobs = await fetch(`http://localhost:3000/api/jobs/${jobId}`, {
    //       method: "PUT",
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //       body: JSON.stringify({ curr_job: currJobs[0] }),
    //     });

    //     if (!res_jobs.ok) {
    //       console.log("Not updated");
    //     } else {
    //       alert("Job Applied");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // const handleOA = () => {
    //   router.push("/OA");
    // };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        router.push("/");
    };
    // console.log(state.entity_id);

    return (
        <div>
            {status && <ApplicantDetails />}
            {!status && (
                <div className="flex justify-center items-center flex-col w-full ">
                    <Header_Student />
                    <div className="flex justify-center  max-w-[1700px]">
                        <div className="flex-col float-left m-16">
                            <Sidebar />
                        </div>

                        <div className="flex-col float-left my-16 w-1/2 justify-start">
                            {jobs.map((t) => (

                                <Jobcard key={t._id} props={t} applicantWithID={applicantWithID} jobs={jobs} supabaseId={supabaseid} />
                            ))}
                        </div>
                        <div className="flex-col float-right m-16">
                            <Blog />

                        </div>
                    </div>

                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Dashboard;