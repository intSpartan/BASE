import { Card, Typography } from "@material-tailwind/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AboutJob() {
  const params = useParams();
  const { jobId } = params;
  const [jobDetail, setJobDetail] = useState();
  const [companyDetails, setCompanyDetails] = useState();

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
    <div className="p-8 max-w-3xl mx-auto space-y-4">
      {/* Title Card */}
      <Card className="shadow-lg rounded-lg p-4 bg-white">
        <Typography variant="h4" className="font-bold">
          {jobDetail && jobDetail.job.title}
        </Typography>
      </Card>

      {/* Company and Location Card */}
      <Card className="shadow-lg rounded-lg p-4 bg-white flex flex-row justify-between">
        <Typography color="gray" className="font-semibold">
          Company: {jobDetail && jobDetail.job.title}
        </Typography>
        <Typography color="gray" className="font-semibold">
          Location: {jobDetails.location}
        </Typography>
      </Card>

      {/* Salary Card */}
      <Card className="shadow-lg rounded-lg p-4 bg-white">
        <Typography color="blue-gray" className="font-semibold">
          Salary: {jobDetails.salary}
        </Typography>
      </Card>

      {/* Job Description Card */}
      <Card className="shadow-lg rounded-lg p-4 bg-white">
        <Typography variant="h5" className="font-bold mb-2">
          Job Description
        </Typography>
        <Typography color="blue-gray">{jobDetails.description}</Typography>
      </Card>

      {/* Responsibilities and Expectations Card */}
      <Card className="shadow-lg rounded-lg p-4 bg-white">
        <Typography variant="h5" className="font-bold mb-2">
          Responsibilities and Expectations
        </Typography>
        <ul className="list-disc pl-5">
          {jobDetails.responsibilities.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </Card>

      {/* Requirements Card */}
      <Card className="shadow-lg rounded-lg p-4 bg-white">
        <Typography variant="h5" className="font-bold mb-2">
          Requirements
        </Typography>
        <ul className="list-disc pl-5">
          {jobDetails.requirements.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
