
"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import supabase from "../../authCompany";
import { useRouter } from 'next/navigation'
import ApplicantDetails from '@/app/components/ApplicantDetails';
import { HiPencilAlt } from "react-icons/hi";

const getApplicants = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/applicants/${id}`, {
            // method: "GET",
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

const getJobs = async () => {
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
    const [status, setStatus] = useState();
    const [jobs, setJobs] = useState([]);
    const [supabaseid, setSupabaseid] = useState();
    const [applicant_with_id, setApplication_with_id] = useState();

    const router = useRouter();

    useEffect(() => {
        getJobs().then(jobs => setJobs(jobs.jobs));
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            if (!user) {

            } else {
                const appa = await getApplicants(user.id);
                console.log(appa.applicants);
                setSupabaseid(user.id);
                setApplication_with_id(appa.applicants);
                setStatus((appa.applicants === null));
            }
        };
        fetchUser();
    }, []);



    const handleApplication = async (jobId) => {
        try {

            const updatedres = applicant_with_id;
            updatedres.jobsApplied.push(jobId)

            const curr_job = jobs.filter((t) => t._id === jobId);
            const applicant_id = applicant_with_id._id;
            curr_job[0].applicantsApplied.push(applicant_id);
            console.log(curr_job[0].applicantsApplied);



            const res = await fetch(`http://localhost:3000/api/applicants/${supabaseid}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ updatedres }),

            });

            const res_jobs = await fetch(`http://localhost:3000/api/jobs/${jobId}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ curr_job: curr_job[0] }),

            });



            if (!res_jobs.ok) {
                console.log("Not updated");
            }

            else {
                alert("Job Applied");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {(status) && <ApplicantDetails />}
            {(!status) &&
                <>
                    <div>
                        {jobs.map((t) => (
                            <div
                                key={t._id}
                                className="p-4 border border-slate-300 my-3 flex justify-between items-start rounded-md"
                            >
                                <div>
                                    <h2 className="font-bold text-2xl">{t.title}</h2>
                                    <div>{t.description}</div>
                                    <div>{t.companyid}</div>
                                    <div>{t.curr_state}</div>
                                    <button onClick={() => handleApplication(t._id)}>Apply Now</button>
                                </div>

                                <div className="flex gap-2">
                                    <HiPencilAlt id={t._id} />
                                </div>
                            </div>
                        ))}
                    </div>
                </>}

        </div>
    );
};

export default Dashboard;