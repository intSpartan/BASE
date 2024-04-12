"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import for useRouter
import { useTable, useSortBy } from 'react-table';
import { v1 as uuid } from "uuid";
import { ArrowRight } from 'lucide-react';

const Interview = ({ jobId }) => {
  const router = useRouter();
  const [applicants, setApplicants] = useState([]);
  const [interviewLinks, setInterviewLinks] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    const getApplicant = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/api/jobs/${jobId}`, { method: "GET", cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch topics");
        const job = await res.json();

        const interviewRes = await fetch(`http://localhost:3000/api/interview/job/${jobId}`, { method: "GET", cache: "no-store" });
        if (!interviewRes.ok) throw new Error("Failed to fetch interview links");
        const interviewData = await interviewRes.json();
        setInterviewLinks(interviewData || {});

        const applicantsData = await Promise.all(job.job.applicantsApplied.map(async id => {
          const response = await fetch(`http://localhost:3000/api/applicants/${id}`, { cache: "no-store" });
          if (!response.ok) {
            console.error(`Failed to fetch applicant with ID ${id}`);
            return null;
          }
          return response.json();
        }));

        setApplicants(applicantsData.filter(applicant => applicant !== null));
      } catch (error) {
        console.error("Error loading topics: ", error);
      }
      setIsLoading(false);
    };

    getApplicant();
  }, [jobId]);

  const handleSendInterview = async (applicantId) => {
    const meetingLink = `/room/${uuid()}`;
    try {
      const res = await fetch(`/api/interview/job/${jobId}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicantID: applicantId,
          link: meetingLink,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send interview invitation");
      }

      setInterviewLinks(prev => ({ ...prev, [applicantId]: meetingLink }));
      alert(`Interview link sent to applicant ${applicantId}`);
    } catch (error) {
      console.error("Error sending interview: ", error);
    }
  };

  const handleUnsendInterview = async (applicantId) => {
    const res = await fetch(`/api/interview/job/${jobId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ applicantID: applicantId })
    });
    if (!res.ok) {
      throw new Error("Failed to send interview invitation");
    }

    setInterviewLinks(prev => {
      // Create a new object excluding the applicantId that was removed
      const { [applicantId]: value, ...remaining } = prev;
      return remaining;
    });

    alert(`Interview link has been deleted from applicant ${applicantId}`);
  }

  const sortApplicants = () => {
    const sortedApplicants = [...applicants].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.applicants.name.localeCompare(b.applicants.name);
      }
      return b.applicants.name.localeCompare(a.applicants.name);
    });
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    setApplicants(sortedApplicants);
  };

  console.log(applicants)

  return (
    <div>
      {isLoading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
          <div className="flex flex-col p-8">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 cursor-pointer"
                          onClick={sortApplicants}
                        >
                          Name
                        </th>
                        <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">ID</th>
                        <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">College</th>
                        <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">CGPA</th>
                        <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {applicants.map(applicant => (
                        <tr key={applicant.applicants._id}>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">{applicant.applicants.name}</td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">{applicant.applicants._id}</td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">{applicant.applicants.college}</td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">{applicant.applicants.cgpa}</td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            {interviewLinks[applicant.applicants._id] ? (
                              <>
                                <button onClick={() => { handleSendInterview(applicant.applicants._id) }} className="m-1 inline-flex items-center rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 text-sm font-semibold text-white">
                                  Attend Interview
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                                <button onClick={()=>{handleUnsendInterview(applicant.applicants._id)}} className="m-1 inline-flex items-center rounded-md bg-red-500 hover:bg-red-600 px-3 py-2 text-sm font-semibold text-white">
                                  Unsend Interview
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                              </>
                            ) : (
                                <button onClick={()=>{ handleSendInterview(applicant.applicants._id)}} className="m-1 inline-flex items-center rounded-md bg-green-500 hover:bg-green-600 px-3 py-2 text-sm font-semibold text-white">
                                  Send Interview
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                              )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Interview;
