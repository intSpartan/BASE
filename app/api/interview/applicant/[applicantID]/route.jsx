import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb_jobs";
import Job from "@/models/jobs"


export async function GET(request, {params}) {
  const { applicantID } = params;
  await connectMongoDB();
  const jobs = await Job.find({ [`applicantsInterview.${applicantID}`]: { $exists: true } });
  console.log("Jobs:", jobs);
  if (jobs.length === 0) {
    return NextResponse.json({ message: `No interviews found for applicantID: ${applicantID}` }, { status: 404 });
  }
  const applicantsInterviews = jobs.map(job => ({
    jobId: job._id.toString(), // Ensure the job ID is converted to string if it's an ObjectID
    jobTitle: job.title,
    applicantInterviewLink: job.applicantsInterview[applicantID]
  }));

  console.log(applicantsInterviews);
  return NextResponse.json(applicantsInterviews);
}
