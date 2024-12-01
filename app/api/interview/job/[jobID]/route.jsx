import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb_jobs";
import Job from "../../../../..//models/jobs"


export async function GET(request, {params}) {
  const { jobID } = params;

  await connectMongoDB();

  const job = await Job.findById(jobID);
  console.log(job)

  const applicantsInterview = job.applicantsInterview || {};

  return NextResponse.json(applicantsInterview);
}

export async function PUT(request, { params }) {
  const { jobID } = params;
  const { applicantID, link } = await request.json();

  // console.log({ applicantID, link });

  // console.log(jobID);

  await connectMongoDB();
  const update = {
    $set: {
      [`applicantsInterview.${applicantID}`]: link
    }
  };

  try {
    const result = await Job.findOneAndUpdate(
      { _id: jobID }, update
    );

    return NextResponse.json({ message: "Applicant Updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json({ message: "Error updating job" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { jobID } = params;
  const { applicantID } = await request.json();

  await connectMongoDB();

  const update = {
    $unset: {
      [`applicantsInterview.${applicantID}`]: ""
    }
  };

  try {
    const result = await Job.findOneAndUpdate(
      { _id: jobID }, update
    );

    // Assuming NextResponse is from 'next/server'. Typically, you might use res.status(200).json({...}) in API routes.
    return NextResponse.json({ message: "Applicant Interview Removed" }, { status: 200 });
  } catch (error) {
    console.error("Error removing applicant interview:", error);
    return NextResponse.json({ message: "Error removing applicant interview" }, { status: 500 });
  }
}
