import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb_jobs";
import Job from "../../../models/jobs";

export async function POST(request) {
  const { title, role, stipendSalary, locations, jobDescription, skillsRequired, eduQualifications, experienceRequired, startingDate, endingDate, graduationYear, companyid, companyName } = await request.json();
  // console.log(companyName);
  await connectMongoDB();
  await Job.create({ title, role, stipendSalary, locations, jobDescription, skillsRequired, eduQualifications, experienceRequired, startingDate, endingDate, graduationYear, companyid, companyName });
  return NextResponse.json({ message: "Job Added" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const jobs = await Job.find();
  return NextResponse.json({ jobs });
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Job.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}

