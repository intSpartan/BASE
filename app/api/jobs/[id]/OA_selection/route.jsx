import connectMongoDB from "../../../../../libs/mongodb_jobs";
import { NextResponse } from "next/server";
import Job from "../../../../../models/jobs";

export async function PUT(req, { params, body }) {
  await connectMongoDB();
  try {
    const data = await req.json();
    await Job.findOneAndUpdate(
      { _id: params.id },
      { $push: { OA_candidates: data.candidate_id } },
      { new: true }
    );
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
