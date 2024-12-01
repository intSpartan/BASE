'use client'

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { MapPin, Link as LinkIcon, Users, Briefcase, Calendar } from 'lucide-react'

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Badge } from "../../components/ui/badge"
// import { Separator } from "@/components/ui/separator"
import Header_Company from "../../components/Header_Company"
import Footer from "../../components/Footer"

const company = {
  name: "AbhiTech",
  industry: "Technology",
  description: "Welcome to our IT company, where innovation meets expertise to redefine the boundaries of technology. Founded on a passion for excellence and a drive for continuous improvement, we have emerged as a trusted leader in the ever-evolving landscape of digital solutions. Our journey is fueled by a team of dedicated professionals who bring together diverse skills and perspectives to deliver cutting-edge products and services tailored to meet the unique needs of our clients. With a relentless focus on quality, integrity, and customer satisfaction, we have earned a reputation for excellence and reliability in everything we do. At our core, we are more than just a technology company; we are partners in your success, committed to empowering businesses to thrive in the digital age and beyond. Join us as we embark on this exciting journey of innovation and transformation.",
  location: "San Francisco, CA",
  website: "https://www.abc-tech.com",
  logo: "https://via.placeholder.com/150",
  employees: 500,
  jobOpenings: [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      deadline: "May 15, 2024",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product Management",
      location: "San Francisco, CA",
      deadline: "May 20, 2024",
    },
  ],
  goals: "At our IT company, our goals are firmly anchored in driving innovation, delivering exceptional solutions, and fostering long-lasting partnerships. We strive to push the boundaries of technology, consistently exceeding client expectations through our expertise and dedication. Our commitment lies in harnessing the power of cutting-edge tools and methodologies to solve complex challenges, while maintaining a customer-centric approach at every step. With a focus on continuous improvement and collaboration, we aim to be at the forefront of the ever-evolving IT landscape, empowering businesses to thrive in the digital age.",
  ambitions: "In the realm of ambitions, our IT company envisions a future where technological possibilities are limitless and transformative. We aspire to be pioneers in shaping the digital frontier, leading the charge towards a more connected and innovative world. With a steadfast commitment to excellence, we aim to expand our reach globally, forging new partnerships and ventures that drive progress and positive change. Our ambition extends beyond mere success; we strive to leave a lasting impact on industries, societies, and lives, through groundbreaking solutions and unwavering dedication to our mission.",
}

export default function CompanyProfile() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <Header_Company />
      <main className="flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto py-8 px-4 sm:px-6 lg:px-8"
        >
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={company.logo} alt={company.name} />
                  <AvatarFallback>{company.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <h1 className="text-3xl font-bold text-center mb-2">{company.name}</h1>
                <Badge variant="secondary">{company.industry}</Badge>
              </div>
              <div className="flex justify-center mb-6">
                <Button asChild>
                  <a href={company.website} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" /> Visit Website
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>{company.employees} Employees</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>{company.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{company.description}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{company.goals}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Ambitions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{company.ambitions}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Job Openings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {company.jobOpenings.map((job) => (
                  <Card key={job.id}>
                    <CardHeader>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.department}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>Deadline: {job.deadline}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => router.push(`/jobs/${job.id}`)}>
                        <Briefcase className="mr-2 h-4 w-4" /> Apply Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

