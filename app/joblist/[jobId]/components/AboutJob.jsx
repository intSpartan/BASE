import Header from "@/app/student/components/header";

export default function AboutJob() {
  const jobDetails = {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    salary: "$100,000 - $120,000 per year",
    description:
      "Tech Corp is looking for a Software Engineer to join our dynamic team...",
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
    <>
      <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">{jobDetails.title}</h1>
        <p className="text-gray-600">
          {jobDetails.company} - {jobDetails.location}
        </p>
        <p className="text-gray-700 mb-4">{jobDetails.salary}</p>

        <h2 className="text-xl font-bold mb-2">Job Description</h2>
        <p className="mb-4">{jobDetails.description}</p>

        <h2 className="text-xl font-bold mb-2">Responsibilities</h2>
        <ul className="list-disc pl-5 mb-4">
          {jobDetails.responsibilities.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-2">Requirements</h2>
        <ul className="list-disc pl-5">
          {jobDetails.requirements.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
