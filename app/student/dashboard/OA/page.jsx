'use client'

import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../../GlobalContext';
import { useRouter } from "next/navigation";
import { ArrowRight } from 'lucide-react'
import Header from '../../components/header';
import Footer from '../../components/footer';
const OA = () => {

    const state = useGlobalContext();
    const router = useRouter();
    const [OA_List, setOA_List] = useState([]);

    const [jobs, setJobs] = useState([]);




    useEffect(() => {
        if (state != undefined) {
            const getApplicant = async () => {
                try {
                    const res = await fetch(
                        `http://localhost:3000/api/applicants/${state.state.entity_id}/OA_List`,
                        {
                            method: "GET",
                            cache: "no-store",
                        }
                    );

                    if (!res.ok) {
                        throw new Error("Failed to fetch topics");
                    }
                    else {
                        // console.log((await res.json()).applicant.cgpa);
                        setOA_List((await res.json()).applicant.OA_list)
                    }
                } catch (error) {
                    console.log("Error loading topics: ", error);
                }
            };

            getApplicant();

        }
    }, [state]);

    useEffect(() => {
        const getJob = async (jobId) => {
            try {
                const res = await fetch(
                    `http://localhost:3000/api/jobs/${jobId}`,
                    {
                        method: "GET",
                        cache: "no-store",
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch topics");
                } else {
                    const curr_job = await res.json();
                    return curr_job;
                }
            } catch (error) {
                console.log("Error loading topics: ", error);
            }
        };

        if (OA_List.length > 0) {
            Promise.all(OA_List.map(async (t) => {
                return getJob(t);
            })).then((jobsData) => {
                setJobs(jobsData);
            }).catch((error) => {
                console.log("Error loading jobs: ", error);
            });
        }
    }, [OA_List]);

    console.log(jobs);
    const handleOA = (jobId) => {
        router.push(`/OA/${jobId}`);
    };

    return (
        <>
            {(jobs) && (<div className="bg-gray-300">
                <>
                    <Header />
                    <section className="mx-auto w-full max-w-7xl px-4 py-4">
                        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                            <div>
                                <h2 className="text-lg font-semibold">Online Assessments</h2>
                                <p className="mt-1 text-sm text-gray-700">
                                    This is a list of all the Online Assessments recieved by the you.
                                </p>
                            </div>
                            {/* <div>
                                <button
                                    type="button"
                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Add new employee
                                </button>
                            </div> */}
                        </div>
                        <div className="mt-6 flex flex-col">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                    >
                                                        <span>Company</span>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                                    >
                                                        Description
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                    >
                                                        Status
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                    >
                                                        Role
                                                    </th>
                                                    <th scope="col" className="relative px-4 py-3.5">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {jobs.map((job) => (
                                                    <tr key={job.job.title}>
                                                        <td className="whitespace-nowrap px-4 py-4">
                                                            <div className="flex items-center">
                                                                <div className="h-10 w-10 flex-shrink-0">
                                                                    {/* <img
                                                                        className="h-10 w-10 rounded-full object-cover"
                                                                        src={person.image}
                                                                        alt=""
                                                                    /> */}
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{job.job.title}</div>
                                                                    {/* <div className="text-sm text-gray-700">{job.job.title}</div> */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-12 py-4">
                                                            {/* <div className="text-sm text-gray-900 ">{job.job.title}</div> */}
                                                            <div className="text-sm text-gray-700">{job.job.description}</div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-4 py-4">
                                                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                                Active
                                                            </span>
                                                        </td>
                                                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                            {job.job.title}
                                                        </td>
                                                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                            <div className="text-gray-700">
                                                                <button
                                                                    type="button" onClick={() => handleOA(job.job._id)}
                                                                    className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-black/100"
                                                                >
                                                                    Attempt Now
                                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </>
            </div>)

            }
            {(jobs.length === 0) && <div>Loading....</div>}

        </>
    )
}

export default OA
