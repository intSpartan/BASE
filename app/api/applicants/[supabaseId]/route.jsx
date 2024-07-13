import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb_jobs";
import Applicant from "@/models/applicant";

export async function GET(req, { params, body }) {
  await connectMongoDB();
  const applicants = await Applicant.findOne({ loginid: params.supabaseId });
  return NextResponse.json({ applicants });
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
export async function PUT(req, { params, body }) {
  // console.log(req.method);
  await connectMongoDB();
  try {
    const { updatedres } = await req.json();
    console.log(updatedres.applicants);
    console.log(params.supabaseId);
    await Applicant.findOneAndUpdate(
      { loginid: params.supabaseId },
      { $set: updatedres.applicants },
      { new: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating applicant:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
