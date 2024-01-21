// components/Sidebar.js

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
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        // console.log(res.status);
        return await res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

const getJobs = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/jobs", {
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
                setStatus((appa.applicants === null));
            }
        };
        fetchUser();
    }, []);



    // const [chkApplicant, setChkApplicant] = useState(null);

    // useEffect(() => {

    // }, [status])


    return (
        <div>
            {/* {loader && <div> Loading...</div >} */}
            {(status) && <ApplicantDetails />}
            {(!status) && <div>
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
                        </div>

                        <div className="flex gap-2">
                            <HiPencilAlt id={t._id} />
                        </div>
                    </div>
                ))}
            </div>}

        </div>
    );
};

export default Dashboard;
