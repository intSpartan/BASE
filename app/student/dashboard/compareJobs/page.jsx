"use client"

import React, { useEffect, useState } from "react";
import Header_Student from "../../../components/Header_Student";
import Footer from "../../../components/Footer";

const Sample5 = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsData, setJobsData] = useState([
        {
            titleRow1: "Title",
            titleRow2: "Role",
            titleRow3: "Stipend/Salary",
            titleRow4: "Locations",
            titleRow5: "Skills",
            titleRow6: "Education",
            titleRow7: "Experience",
            titleRow8: "Company",
        },
        {
            title: "Title of first job",
            role: "Role of job",
            stipendSalary: "Salary/Stipend to be given",
            locations: "Locations for the work",
            skillsRequired: "Skills needed for the job",
            graduationYear: "Graduation Year for the job",
            companyName: "Company Name"
        },
        {
            title: "Title of first job",
            role: "Role of job",
            stipendSalary: "Salary/Stipend to be given",
            locations: "Locations for the work",
            skillsRequired: "Skills needed for the job",
            graduationYear: "Graduation Year for the job",
            companyName: "Company Name"
        }
    ]);
    const itemsPerPage = 5;

    useEffect(() => {
        getAllJobs().then((data) => setJobs(data.jobs));
    }, []);

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
            console.log("Error loading jobs: ", error);
        }
    };

    const handleJob1 = (job) => {
        const newJobsData = [...jobsData];
        newJobsData[1] = job;
        setJobsData(newJobsData);
        setIsOpen1(false);
    };

    const handleJob2 = (job) => {
        const newJobsData = [...jobsData];
        newJobsData[2] = job;
        setJobsData(newJobsData);
        setIsOpen2(false);
    };

    const toggleList1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleList2 = () => {
        setIsOpen2(!isOpen2);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, jobs.length);

    const currentJobs = jobs.slice(startIndex, endIndex);

    return (
        <div>
            <Header_Student />
            <div className="bg-gray-300 min-h-screen flex items-center justify-center">
                <div className="mx-5 pb-10">
                    <div className="py-8 lg:py-14 flex flex-col items-center">
                        <span className="text-[#365CCE] text-xl">JoBro</span>
                        <span className="font-semibold text-center text-4xl sm:text-5xl mt-3 mb-6">
                            Compare our all jobs and find yours
                        </span>
                        <span className="sm:text-xl text-center text-lg font-light">
                            Simple, transparent place to compare jobs
                        </span>
                    </div>
                    <div className="lg:max-w-[1100px] max-w-[500px] mx-auto bg-white rounded-xl">
                        <table className="w-full text-start border-spacing-5 border-separate flex flex-col lg:flex-row p-5 lg:p-0">
                            <tbody>
                                <tr>
                                    <td className="w-[130px]"></td>
                                    <td className="h-[50px] w-[400px] lg:h-[70px] xl:h-[50px] relative">
                                        <div className="flex items-center justify-center">
                                            <div className="bg-[#365CCE] text-white rounded-full w-20 h-20 flex items-center justify-center cursor-pointer" onClick={toggleList1}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9,2 h2 v7 h7 v2 h-7 v7 h-2 v-7 h-7 v-2 h7 z" />
                                                </svg>
                                            </div>
                                        </div>
                                        {isOpen1 && (
                                            <ul className="absolute top-full left-0 mt-2 border border-black rounded-md bg-white shadow-md">
                                                {currentJobs.map((job) => (
                                                    <li key={job.id} className="py-2 px-4" onClick={() => handleJob1(job)}>{job.title}</li>
                                                ))}
                                                <div className="flex justify-center mt-4">
                                                    {jobs.length > itemsPerPage && (
                                                        <div className="flex">
                                                            <button
                                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                                                                onClick={() => setCurrentPage(currentPage - 1)}
                                                                disabled={currentPage === 1}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-6 w-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M15 19l-7-7 7-7"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                                                                onClick={() => setCurrentPage(currentPage + 1)}
                                                                disabled={endIndex >= jobs.length}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-6 w-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M9 5l7 7-7 7"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>  
                                            </ul>
                                        )}
                                    </td>

                                    <td className="h-[50px] w-[380px] lg:h-[70px] xl:h-[50px] relative">
                                        <div className="flex items-center justify-center">
                                            <div className="bg-[#365CCE] text-white rounded-full w-20 h-20 flex items-center justify-center cursor-pointer" onClick={toggleList2}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9,2 h2 v7 h7 v2 h-7 v7 h-2 v-7 h-7 v-2 h7 z" />
                                                </svg>
                                            </div>
                                        </div>
                                        {isOpen2 && (
                                            <div>
                                                <ul className="absolute top-full left-0 mt-2 border border-black rounded-md bg-white shadow-md">
                                                    {currentJobs.map((job) => (
                                                        <li key={job.id} className="py-2 px-4" onClick={() => handleJob2(job)}>{job.title}</li>
                                                    ))}
                                                    <div className="flex justify-center mt-4">
                                                        {jobs.length > itemsPerPage && (
                                                            <div className="flex">
                                                                <button
                                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                                                                    onClick={() => setCurrentPage(currentPage - 1)}
                                                                    disabled={currentPage === 1}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-6 w-6"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M15 19l-7-7 7-7"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                                <button
                                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                                                                    onClick={() => setCurrentPage(currentPage + 1)}
                                                                    disabled={endIndex >= jobs.length}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-6 w-6"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M9 5l7 7-7 7"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </ul>
                                                
                                            </div>

                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>



                        <table className="w-full text-start border-spacing-10 flex flex-col p-50" cellPadding={20}>
                            <tbody>
                                <tr className="border border-1">
                                    <td className="h-5 text-xl">
                                        <span>Title</span>
                                    </td>
                                    <td className="w-[150px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[1].title}
                                    </td>
                                    <td className="w-[200px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[2].title}
                                    </td>
                                </tr>
                                <tr className="border border-1">
                                    <td className="h-5 text-xl">
                                        <span>Role</span>
                                    </td>
                                    <td className="w-[150px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[1].role}
                                    </td>
                                    <td className="w-[200px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[2].role}
                                    </td>
                                    <td className="w-[180px]"></td>
                                </tr>
                                <tr className="border border-1">
                                    <td className="h-5 text-xl">
                                        <span>Salary/Stipend</span>
                                    </td>
                                    <td className="w-[150px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[1].stipendSalary}
                                    </td>
                                    <td className="w-[200px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[2].stipendSalary}
                                    </td>
                                    <td className="w-[180px]"></td>
                                </tr>
                                <tr className="border border-1">
                                    <td className="h-5 text-xl">
                                        <span>Locations</span>
                                    </td>
                                    <td className="w-[150px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[1].locations}
                                    </td>
                                    <td className="w-[200px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[2].locations}
                                    </td>
                                    <td className="w-[180px]"></td>
                                </tr>
                                <tr className="border border-1">
                                    <td className="h-5 text-xl">
                                        <span>Skills</span>
                                    </td>
                                    <td className="w-[150px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[1].skillsRequired}
                                    </td>
                                    <td className="w-[200px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[2].skillsRequired}
                                    </td>
                                    <td className="w-[180px]"></td>
                                </tr>
                                <tr className="border border-1">
                                    <td className="h-5 text-xl">
                                        <span>Graduation Year</span>
                                    </td>
                                    <td className="w-[150px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[1].graduationYear}
                                    </td>
                                    <td className="w-[200px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[2].graduationYear}
                                    </td>
                                    <td className="w-[180px]"></td>
                                </tr>
                                <tr className="border border-1">
                                    <td className="h-5 text-xl">
                                        <span>Company</span>
                                    </td>
                                    <td className="w-[150px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[1].companyName}
                                    </td>
                                    <td className="w-[200px]"></td>
                                    <td className="h-5 text-xl font-semibold text-[#365CCE]" colSpan={2}>
                                        {jobsData[2].companyName}
                                    </td>
                                    <td className="w-[180px]"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Sample5;
