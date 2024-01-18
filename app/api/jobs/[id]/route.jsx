import connectMongoDB from "../../../../libs/mongodb_jobs";
import { NextResponse } from "next/server";
import Job from "@/models/jobs"


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();

    const job = await Job.findOne({ _id: id })

    return NextResponse.json({ job }, { status: 200 });

}