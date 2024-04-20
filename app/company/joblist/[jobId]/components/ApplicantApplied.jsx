"use client";

import supabase from "@/app/authCompany";
import { ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const updateShortlistList = async (applicant_id, jobId) => {
  const res_jobs = await fetch(
    `http://localhost:3000/api/jobs/${jobId}/ResumeShortlist`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ candidate_id: applicant_id }),
    }
  );
};

const ApplicantApplied = ({ ...props }) => {
  const params = useParams();
  const { jobId } = params;
  const [applicants, setApplicants] = useState([]);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const getApplicant = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/jobs/${props.jobId}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const job = await res.json();
        const applicantsData = [];

        for (const id of job.job.applicantsApplied) {
          const response = await fetch(
            `http://localhost:3000/api/applicants/${id}`,
            {
              cache: "no-store",
            }
          );
          if (!response.ok) {
            console.error(`Failed to fetch applicant with ID ${id}`);
            continue;
          }
          const applicant = await response.json();
          applicantsData.push(applicant);
        }
        setApplicants(applicantsData);
        console.log(applicantsData);
      } catch (error) {
        console.log("Error loading topics: ", error);
      }
    };

    getApplicant();
  }, [props.jobId]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("resumes")
          .list("", { limit: 1000 });

        if (error) {
          console.error("Error fetching resumes:", error);
          return;
        }
        setResumes(data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };
    fetchResumes();
  }, []);

  const handleApplication = async (applicant_id) => {
    const res = await updateShortlistList(applicant_id, jobId);
    alert("Candidate Shortlisted");
  };

  const downloadAllResumes = async () => {
    for (const file of resumes) {
      await downloadResume(file);
    }
  };

  const downloadResume = async (file) => {
    try {
      const { data, error } = await supabase.storage
        .from("resumes")
        .download(file.name);

      if (error) {
        console.error("Error downloading resume:", error);
        return;
      }
      const blob = new Blob([data]);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = file.name;
      link.click();
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  const downloadUsingLoginid = async (loginid) => {
    const { data, error } = await supabase.storage
      .from("resumes")
      .download(`${loginid}.pdf`);

    if (error) {
      alert("No Resume Uploaded by the Candidate", error);
      return;
    }
    const blob = new Blob([data]);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${loginid}.pdf`;
    link.click();
  };

  return (
    <div className="bg-gray-300">
      <>
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h2 className="text-lg font-semibold">Candidates who applied</h2>
              <p className="mt-1 text-base text-gray-700">
                This is a list of all the candidates who applied for this job
              </p>
            </div>
            <div>
              <button
                onClick={downloadAllResumes}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Download All Resumes
              </button>
            </div>
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
                          className="px-4 py-3.5 text-left text-base font-normal text-gray-700"
                        >
                          <span>Name</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-base font-normal text-gray-700"
                        >
                          College
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-base font-normal text-gray-700"
                        >
                          CGPA
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-base font-normal text-gray-700"
                        >
                          Resume
                        </th>
                        <th scope="col" className="relative px-4 py-3.5">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {applicants.map((applicant) => (
                        <tr key={applicant.applicants._id}>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0"></div>
                              <div className="ml-4">
                                <div className="text-base font-medium text-gray-900">
                                  {applicant.applicants.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-base text-gray-700">
                              {applicant.applicants.college}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-base text-gray-700">
                            {applicant.applicants.cgpa}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              <button
                                onClick={async () => {
                                  downloadUsingLoginid(
                                    applicant.applicants.loginid
                                  );
                                }}
                              >
                                Download Resume
                              </button>
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-base font-medium">
                            <div className="text-gray-700">
                              <button
                                type="button"
                                onClick={() =>
                                  handleApplication(
                                    applicant.applicants.loginid
                                  )
                                }
                                className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-base font-semibold text-white hover:bg-black/100"
                              >
                                Shortlist
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
      </>
    </div>
  );
};

export default ApplicantApplied;
