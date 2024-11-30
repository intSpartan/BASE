'use client'


import { useRouter } from "next/navigation"
import React, { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Building2, BriefcaseIcon, ArchiveIcon, Loader2, BarChart2, Users } from "lucide-react"
import supabase from "../../authCompany"
import ClosedJobsList from "../closedjobs/page"
import JobList from "../joblist/page"
import CompanyForm from "../../components/CompanyForm"
import Footer from "../../components/Footer"
import Header from "../../components/Header_Company"
import FormPage from "../../form/page"
// import { Button } from "../../../components/ui/button"
import { Progress } from "../../components/ui/progress"

const getCompany = async (id) => {
  try {
    const res = await fetch(`/api/company/${id}`)
    return res.status === 404
  } catch (error) {
    console.log("Error loading company: ", error)
  }
}

const Dashboard = () => {
  const router = useRouter()
  const [status, setStatus] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [activeJobsCount, setActiveJobsCount] = useState(0)
  const [closedJobsCount, setClosedJobsCount] = useState(0)
  const [totalApplications, setTotalApplications] = useState(0)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
          router.push("/auth")
        } else {
          const obj = await getCompany(user.id)
          setStatus(obj)
          // Fetch job statistics (this is a placeholder, replace with actual API calls)
          setActiveJobsCount(5)
          setClosedJobsCount(3)
          setTotalApplications(127)
        }
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (status) {
    return <CompanyForm />
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
              <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeJobsCount}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Closed Jobs</CardTitle>
              <ArchiveIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{closedJobsCount}</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalApplications}</div>
              <p className="text-xs text-muted-foreground">+23% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hiring Progress</CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <Progress value={68} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Job Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="add-job" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 lg:w-auto">
                <TabsTrigger value="add-job" className="flex items-center gap-2">
                  <BriefcaseIcon className="h-4 w-4" />
                  Add a Job
                </TabsTrigger>
                <TabsTrigger value="active-jobs" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Active Jobs
                </TabsTrigger>
                <TabsTrigger value="closed-jobs" className="flex items-center gap-2">
                  <ArchiveIcon className="h-4 w-4" />
                  Closed Jobs
                </TabsTrigger>
              </TabsList>

              <TabsContent value="add-job" className="space-y-4">
                <FormPage />
              </TabsContent>

              <TabsContent value="active-jobs" className="space-y-4">
                <JobList />
              </TabsContent>

              <TabsContent value="closed-jobs" className="space-y-4">
                <ClosedJobsList />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

export default Dashboard
