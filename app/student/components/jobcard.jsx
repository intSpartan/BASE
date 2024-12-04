import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Briefcase, MapPin, Calendar, DollarSign, ChevronRight } from "lucide-react";

const handleApplication = async (jobId, applicantWithID, jobs, supabaseId) => {
  try {
    const updatedres = await (await fetch(`/api/applicants/${supabaseId}`)).json();
    updatedres.applicants.jobsApplied.push(jobId);

    const currJobs = jobs.filter((t) => t._id === jobId);
    currJobs[0].applicantsApplied.push(supabaseId);

    const res = await fetch(`/api/applicants/${supabaseId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ updatedres }),
    });

    const res_jobs = await fetch(`/api/jobs/${jobId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ curr_job: currJobs[0] }),
    });

    if (!res_jobs.ok) {
      console.log("Not updated");
    } else {
      alert("Job Applied");
    }
  } catch (error) {
    console.log(error);
  }
};

const JobCard = ({ props, applicantWithID, jobs, supabaseId }) => {
  const router = useRouter();
  const [apply, setApply] = useState("Apply Now");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleApply = (id, applicantWithID, jobs, supabaseId) => {
    setApply("Applied");
    setIsButtonDisabled(true);
    handleApplication(id, applicantWithID, jobs, supabaseId);
  };

  return (
    <Card className="w-full transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{props.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{props.companyName}</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{props.locations}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{props.stipendSalary}</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{props.type}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm">Deadline: {props.deadline}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="secondary">React.js</Badge>
          <Badge variant="secondary">Node.js</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => router.push(`/student/joblist/${props._id}`)}>
          View Details
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
        <Button 
          onClick={() => handleApply(props._id, applicantWithID, jobs, supabaseId)}
          disabled={isButtonDisabled}
        >
          {apply}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
