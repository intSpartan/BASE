import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb_jobs";
import Applicant from "../../../../../models/applicant";

export async function PUT(req, { params, body }) {

    await connectMongoDB();
    try {
        const data = await req.json();
        console.log(data.jobId);
        console.log(params.supabaseId);
        await Applicant.findOneAndUpdate(
            { _id: params.supabaseId },
            { $push: { OA_list: data.jobId } },
            { new: true }
        );
        return NextResponse.json({ data });
    } catch (error) {
        console.error("Error updating applicant:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}


export async function GET(request, { params }) {
    await connectMongoDB();
    const applicant = await Applicant.findOne({ loginid: params.supabaseId });
    return NextResponse.json({ applicant }, { status: 200 });
}