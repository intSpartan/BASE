"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useGlobalContext } from "../../../GlobalContext"
import Header_Student from "../../../components/Header_Student"
import Footer from "../../../components/Footer"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"
import { Badge } from "../../../components/ui/badge"

const InterviewPage = () => {
  const state  = useGlobalContext()
  const router = useRouter()
  const [interviews, setInterviews] = useState([])
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInterviews = async () => {
      console.log(state);
      if (!state) {
        // console.log("Hi");
        return;
      }

      try {
        const applicantRes = await fetch(`/api/applicants/${state.entity_id}`)
        const applicantData = await applicantRes.json()

        const interviewRes = await fetch(`/api/interview/applicant/${applicantData.applicants._id}`)
        if (!interviewRes.ok) throw new Error("Failed to fetch interviews")

        const interviewData = await interviewRes.json()
        setInterviews(interviewData)

        const jobsData = await Promise.all(
          interviewData.map(async (interview) => {
            const jobRes = await fetch(`/api/jobs/${interview.jobId}`)
            if (!jobRes.ok) throw new Error("Failed to fetch job")
            const jobData = await jobRes.json()
            return jobData.job
          })
        )

        setJobs(jobsData)
        console.log(jobsData);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchInterviews()
  }, [state])

  const handleAttemptInterview = (jobId) => {
    const interview = interviews.find((i) => i.jobId === jobId)
    if (interview) window.open(interview.applicantInterviewLink[0], "_blank")
  }

  const handleOpenDocument = (jobId) => {
    const interview = interviews.find((i) => i.jobId === jobId)
    if (interview) window.open(interview.applicantInterviewLink[1], "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* <Header_Student /> */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Interviews</CardTitle>
            <CardDescription>Your scheduled interviews and related documents</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : jobs.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job._id}>
                      <TableCell className="font-medium">{job.company}</TableCell>
                      <TableCell>{job.title}</TableCell>
                      <TableCell className="max-w-xs truncate">{job.description}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Scheduled</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={() => handleAttemptInterview(job._id)}>
                            <ArrowRight className="mr-2 h-4 w-4" />
                            Start Interview
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleOpenDocument(job._id)}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open Document
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-center text-gray-500">No interviews scheduled at the moment.</p>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

export default InterviewPage
