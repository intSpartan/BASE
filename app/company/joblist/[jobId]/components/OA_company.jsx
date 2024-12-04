'use client'

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Download, FileText, Send } from 'lucide-react'

import { Button } from "../../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table"
import { useToast } from "../../../../components/ui/use-toast"
import OA_creator from "./OA_creater"
import supabase from "../../../../authCompany"

const updateOAList = async (applicant_id, jobId) => {
  const res_jobs = await fetch(`/api/jobs/${jobId}/OA_selection`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ candidate_id: applicant_id }),
  })
  const res_applicant = await fetch(`/api/applicants/${applicant_id}/OA_List`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ jobId: jobId }),
  })
  return res_jobs.ok && res_applicant.ok
}

export default function OA_company({ jobId }) {
  const [applicants, setApplicants] = useState([])
  const [resumes, setResumes] = useState([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const getApplicant = async () => {
      try {
        const res = await fetch(`/api/jobs/${jobId}`, {
          method: "GET",
          cache: "no-store",
        })

        if (!res.ok) {
          throw new Error("Failed to fetch job details")
        }

        const job = await res.json()
        const applicantsData = []

        for (const id of job.job.applicantsResumeShortlist) {
          const response = await fetch(`/api/applicants/${id}`, {
            cache: "no-store",
          })
          if (!response.ok) {
            console.error(`Failed to fetch applicant with ID ${id}`)
            continue
          }
          const applicant = await response.json()
          applicantsData.push(applicant)
        }
        setApplicants(applicantsData)
        setLoading(false)
      } catch (error) {
        console.error("Error loading applicants:", error)
        setLoading(false)
      }
    }

    getApplicant()
  }, [jobId])

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("resumes")
          .list("", { limit: 1000 })

        if (error) {
          console.error("Error fetching resumes:", error)
          return
        }
        setResumes(data)
      } catch (error) {
        console.error("Error fetching resumes:", error)
      }
    }
    fetchResumes()
  }, [])

  const handleOA = async (applicant_id) => {
    const success = await updateOAList(applicant_id, jobId)
    if (success) {
      alert("OA Sent");
      toast({
        title: "OA Sent",
        description: "Online Assessment has been sent to the candidate.",
        duration: 3000,
      })
    } else {
      alert("Error");
      toast({
        title: "Error",
        description: "Failed to send Online Assessment. Please try again.",
        variant: "destructive",
        duration: 3000,
      })
    }
  }

  const downloadAllResumes = async () => {
    for (const file of resumes) {
      await downloadResume(file)
    }
  }

  const downloadResume = async (file) => {
    try {
      const { data, error } = await supabase.storage
        .from("resumes")
        .download(file.name)

      if (error) {
        console.error("Error downloading resume:", error)
        return
      }
      const blob = new Blob([data])
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = file.name
      link.click()
    } catch (error) {
      console.error("Error downloading resume:", error)
    }
  }

  const downloadUsingLoginid = async (loginid) => {
    try {
      const { data, error } = await supabase.storage
        .from("resumes")
        .download(`${loginid}.pdf`)

      if (error) {
        toast({
          title: "Error",
          description: "No Resume Uploaded by the Candidate",
          variant: "destructive",
        })
        return
      }
      const blob = new Blob([data])
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = `${loginid}.pdf`
      link.click()
    } catch (error) {
      console.error("Error downloading resume:", error)
      toast({
        title: "Error",
        description: "Failed to download the resume. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 space-y-8"
    >
      <OA_creator jobId={jobId} />
      
      <Card>
        <CardHeader>
          <CardTitle>Candidates Shortlisted for Online Assessment (OA)</CardTitle>
          <CardDescription>
            This is a list of all the candidates who are shortlisted for Online Assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end mb-4">
            <Button onClick={downloadAllResumes}>
              <Download className="mr-2 h-4 w-4" /> Download All Resumes
            </Button>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>College</TableHead>
                  <TableHead>CGPA</TableHead>
                  <TableHead>Resume</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicants.map((applicant) => (
                  <TableRow key={applicant.applicants._id}>
                    <TableCell className="font-medium">{applicant.applicants.name}</TableCell>
                    <TableCell>{applicant.applicants.college}</TableCell>
                    <TableCell>{applicant.applicants.cgpa}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => downloadUsingLoginid(applicant.applicants.loginid)}>
                        <FileText className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => handleOA(applicant.applicants._id)}>
                        <Send className="mr-2 h-4 w-4" /> Send OA
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
