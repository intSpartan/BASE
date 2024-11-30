'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HiPencilAlt, HiLocationMarker, HiCurrencyDollar, HiBriefcase, HiSearch } from "react-icons/hi";
import supabase from "../../authCompany";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const getJobs = async () => {
  try {
    const res = await fetch("/api/jobs", {
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

const Preloader = () => {
  return (
    <div className="flex h-[550px] justify-center items-center">
      <div className="border-t-4 border-primary rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default function JobList() {
  const [compId, setCompId] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setCompId(data.user.id);
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    getJobs().then((data) => setJobs(data.jobs));
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.companyid === compId &&
      job.curr_state !== "4" &&
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleJob = (jobId) => {
    router.push(`joblist/${jobId}`);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Available Job Openings
        </h1>
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search jobs..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredJobs.map((job) => (
            <motion.div
              key={job._id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-primary">
                    {job.title}
                  </CardTitle>
                  <CardDescription>{job.company}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <HiLocationMarker className="mr-2 text-primary" />
                    <span>{job.locations}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <HiCurrencyDollar className="mr-2 text-primary" />
                    <span>${job.stipendSalary}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <HiBriefcase className="mr-2 text-primary" />
                    <span>{job.type || "Intern"}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4 border-t">
                  <Button variant="outline" onClick={() => handleJob(job._id)}>
                    View Details
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleJob(job._id)}
                  >
                    <HiPencilAlt className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
