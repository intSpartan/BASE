import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb_jobs";
import Applicant from "@/models/applicant";

export async function PUT(req, { params, body }) {
  await connectMongoDB();
  try {
    const cgpa = await req.json();
    await Applicant.findOneAndUpdate(
      { loginid: params.supabaseId },
      { $set: { cgpa: cgpa } },
      { new: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Error updating applicant:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
