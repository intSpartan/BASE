'use client'

import { motion } from "framer-motion"
import { HiLocationMarker, HiCurrencyDollar, HiBriefcase, HiOfficeBuilding } from "react-icons/hi"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Badge } from "../../../../components/ui/badge"
import { Button } from "../../../../components/ui/button"

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
}

export default function JobDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            {jobDetails.title}
          </CardTitle>
          <CardDescription className="text-lg">
            {jobDetails.company}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <HiLocationMarker className="w-4 h-4" />
              {jobDetails.location}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <HiCurrencyDollar className="w-4 h-4" />
              {jobDetails.salary}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <HiBriefcase className="w-4 h-4" />
              Full-time
            </Badge>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700">{jobDetails.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1">
              {jobDetails.responsibilities.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-5 space-y-1">
              {jobDetails.requirements.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-2">About the Company</h2>
            <div className="flex items-start gap-4">
              <HiOfficeBuilding className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">{jobDetails.company}</h3>
                <p className="text-gray-700">
                  Tech Corp is a leading technology company specializing in innovative software solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
            <Button variant="outline" className="w-full sm:w-auto">Save Job</Button>
            <Button className="w-full sm:w-auto">Apply Now</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

