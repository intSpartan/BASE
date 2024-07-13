import { Progress } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { FaEye } from "react-icons/fa";

export default function TableOne({ jobs }) {
  const router = useRouter();

  return (
    <section className="container mx-auto py-6">
      <header className="flex justify-between items-center pb-4 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Jobs Applied</h2>
          <p className="text-gray-600">
            A list of all the jobs you have applied for.
          </p>
        </div>
      </header>
      <table className="w-full mt-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            <th className="py-3 px-4 text-left">Company Name</th>
            <th className="py-3 px-4 text-left">Job Title</th>
            <th className="py-3 px-4 text-left">Current Status</th>
            <th className="py-3 px-4 text-left">Role</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {jobs.map((job, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-4 px-4 text-gray-800">{job.job.companyName}</td>
              <td className="py-4 px-4">
                <p className="font-semibold text-gray-800">{job.job.title}</p>
                <p className="text-sm text-gray-600">{job.department}</p>
              </td>
              <td className="py-4 px-4">
                <Progress
                  percent={job.job.curr_state * 25}
                  showInfo={false}
                  status="active"
                />
              </td>
              <td className="py-4 px-4 text-gray-600">{job.role}</td>
              <td className="py-4 px-4 text-right">
                <button
                  className="flex items-center text-indigo-600 hover:text-indigo-800"
                  onClick={() => router.push(`/student/joblist/${job.job._id}`)}
                >
                  <FaEye className="mr-2" /> View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
