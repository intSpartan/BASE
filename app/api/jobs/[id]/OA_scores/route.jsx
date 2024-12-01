import connectMongoDB from "../../../../../libs/mongodb_jobs";
import { NextResponse } from "next/server";
import Job from "../../../../../models/jobs";

export async function GET(request, { params }) {
    await connectMongoDB();

    const job = await Job.findOne({ _id: params.id });

    return NextResponse.json({ job }, { status: 200 });
}

export async function PUT(req, { params, body }) {
    await connectMongoDB();
    
    try {
        const data = await req.json();
        // console.log(data);
        await Job.findOneAndUpdate(
            { _id: params.id },
            { $push: { OA_scores: data } },
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
