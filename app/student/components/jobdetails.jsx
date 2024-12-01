import { Progress } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { FaEye } from "react-icons/fa";

export default function TableOne({ jobs }) {
  const router = useRouter();

  return (
    <section className="w-full">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Jobs Applied</h2>
        <p className="text-gray-600 mt-1">A list of all the jobs you have applied for.</p>
      </header>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
              {/* <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Status</th> */}
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-4 px-4 text-sm text-gray-900">{job.job.companyName}</td>
                <td className="py-4 px-4">
                  <p className="text-sm font-medium text-gray-900">{job.job.title}</p>
                  <p className="text-sm text-gray-500">{job.department}</p>
                </td>
                {/* <td className="py-4 px-4">
                  <Progress percent={job.job.curr_state * 25} showInfo={false} strokeColor="#000000" />
                </td> */}
                <td className="py-4 px-4 text-sm text-gray-500">{job.role}</td>
                <td className="py-4 px-4 text-right">
                  <button
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => router.push(`/student/joblist/${job.job._id}`)}
                  >
                    <FaEye className="mr-2 h-4 w-4" /> View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

