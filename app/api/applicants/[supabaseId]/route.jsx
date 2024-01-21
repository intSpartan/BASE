import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb_jobs";
import Applicant from "@/models/applicant";

export async function GET(req , {params}) {
    await connectMongoDB();

    const applicants = await Applicant.findOne({ loginid: params.supabaseId });

    return NextResponse.json({ applicants });
}