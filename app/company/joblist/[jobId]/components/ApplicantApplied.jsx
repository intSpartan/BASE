'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowRight, Download, FileText, UserCheck } from 'lucide-react'
import { motion } from "framer-motion"
import supabase from "../../../../authCompany"
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card"
import { Badge } from "../../../../components/ui/badge"
import { toast } from "../../../../components/ui/use-toast"

const updateShortlistList = async (applicant_id, jobId) => {
  const res_jobs = await fetch(`/api/jobs/${jobId}/ResumeShortlist`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ candidate_id: applicant_id }),
  })
  return res_jobs.ok
}

const staticApplicants = [
  {
    applicants: {
      _id: "1",
      name: "John Doe",
      college: "Stanford University",
      cgpa: "3.9",
      loginid: "john_doe",
    },
  },
  {
    applicants: {
      _id: "2",
      name: "Jane Smith",
      college: "MIT",
      cgpa: "3.8",
      loginid: "jane_smith",
    },
  },
  {
    applicants: {
      _id: "3",
      name: "Alice Johnson",
      college: "Harvard University",
      cgpa: "3.7",
      loginid: "alice_johnson",
    },
  },
  {
    applicants: {
      _id: "4",
      name: "Bob Williams",
      college: "UC Berkeley",
      cgpa: "3.6",
      loginid: "bob_williams",
    },
  },
]

export default function ApplicantApplied({ jobId }) {
  const [applicants, setApplicants] = useState(staticApplicants)
  const [resumes, setResumes] = useState([])
  const [loading, setLoading] = useState(false) // Disable loading for static data
  const [searchTerm, setSearchTerm] = useState("")

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

  const handleApplication = async (applicant_id) => {
    const success = await updateShortlistList(applicant_id, jobId)
    if (success) {
      toast({
        title: "Candidate Shortlisted",
        description: "The candidate has been successfully shortlisted.",
      })
    } else {
      toast({
        title: "Error",
        description: "Failed to shortlist the candidate. Please try again.",
        variant: "destructive",
      })
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

  const filteredApplicants = applicants.filter(applicant =>
    applicant.applicants.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    applicant.applicants.college.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Candidates who applied</CardTitle>
        <CardDescription>This is a list of all the candidates who applied for this job</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Input
            placeholder="Search candidates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="rounded-md border">
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
                {filteredApplicants.map((applicant) => (
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
                      <Button onClick={() => handleApplication(applicant.applicants.loginid)}>
                        <UserCheck className="mr-2 h-4 w-4" /> Shortlist
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
