"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header_Student from "../../../components/Header_Student";
import Footer from "../../../components/Footer";

export default function AboutJob() {
  const params = useParams();
  const { jobId } = params;
  const [jobDetail, setJobDetail] = useState(null);
  const [companyDetails, setCompanyDetails] = useState(null);

  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/jobs/${jobId}`, {
          method: "GET",
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
          setJobDetail(data);
          return data;
        }
      } catch (err) {
        console.log(`Error is ${err}`);
      }
    };
    getJobDetail();
  }, [jobId]);

  useEffect(() => {
    if (jobDetail) {
      const getCompanyName = async () => {
        try {
          const res = await fetch(
            `http://localhost:3000/api/company/${jobDetail.job.companyid}`,
            {
              method: "GET",
              cache: "no-cache",
            }
          );
          if (res.ok) {
            const ans = await res.json();
            setCompanyDetails(ans);
          }
        } catch (err) {
          console.log(`Error is ${err}`);
        }
      };
      getCompanyName();
    }
  }, [jobDetail]);

  const jobDetails = {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    salary: "$100,000 - $120,000 per year",
    description:
      "Tech Corp is looking for a Software Engineer to join our dynamic team. You will be responsible for developing and maintaining software solutions, collaborating with other teams, and writing clean, efficient code.",
    responsibilities: [
      "Develop and maintain software solutions",
      "Collaborate with other teams",
      "Write clean and efficient code",
    ],
    requirements: [
      "3+ years of experience in software development",
      "Experience with JavaScript and React",
      "Good communication skills",
    ],
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header_Student />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
            <h1 className="text-3xl font-bold mb-2">
              {jobDetail ? jobDetail.job.title : jobDetails.title}
            </h1>
            <p className="text-xl text-gray-600">
              {jobDetail ? jobDetail.job.companyName : jobDetails.company}
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Job Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-gray-600">{jobDetails.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Salary</h3>
                <p className="text-gray-600">{jobDetails.salary}</p>
              </div>
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
            <p className="text-gray-600">{jobDetails.description}</p>
          </section>

          <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              {jobDetails.responsibilities.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc pl-5 space-y-2">
              {jobDetails.requirements.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

