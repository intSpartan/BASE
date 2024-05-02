import { Card, Typography } from "@material-tailwind/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AboutJob() {
  const params = useParams();
  const { jobId } = params;
  const [jobDetail, setJobDetail] = useState();
  const [companyDetails, setCompanyDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/jobs/${jobId}`, {
          method: "GET",
          cache: "no-store",
        });
        if (!res.ok) {
        } else {
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
          if (!res.ok) {
          } else {
            const ans = await res.json();
            setCompanyDetails(ans);
            setLoading(false);
          }
        } catch (err) {
          console.log(`Error is ${err}`);
        }
      };
      getCompanyName();
    }
  }, [jobDetail]);

  const Preloader = () => {
    return <div class="flex justify-center items-center my-auto h-[550px]">
      <div class="border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>;
  };

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

  if(loading){
    return <Preloader/>
  }

return (
  <div className="bg-white">
    <div className="p-8 max-w-3xl mx-auto space-y-4">
      {/* Title */}
      <div className="pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">
          {jobDetail && jobDetail.job.title}
        </h1>
      </div>

      {/* Company and Location */}
      <div className="pb-4 border-b border-gray-200 flex justify-between">
        <p className="text-gray-700 font-semibold">
          Company: {jobDetail && jobDetail.job.title}
        </p>
        <p className="text-gray-700 font-semibold">
          Location: {jobDetails.location}
        </p>
      </div>

      {/* Salary */}
      <div className="pb-4 border-b border-gray-200">
        <p className="text-gray-700 font-semibold">
          Salary: {jobDetails.salary}
        </p>
      </div>

      {/* Job Description */}
      <div className="pb-4 border-b border-gray-200">
        <h2 className="text-lg font-bold mb-2 text-gray-800">
          Job Description
        </h2>
        <p className="text-gray-700">{jobDetails.description}</p>
      </div>

      {/* Responsibilities and Expectations */}
      <div className="pb-4 border-b border-gray-200">
        <h2 className="text-lg font-bold mb-2 text-gray-800">
          Responsibilities and Expectations
        </h2>
        <ul className="list-disc pl-5">
          {jobDetails.responsibilities.map((item, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="text-lg font-bold mb-2 text-gray-800">
          Requirements
        </h2>
        <ul className="list-disc pl-5">
          {jobDetails.requirements.map((item, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
}
