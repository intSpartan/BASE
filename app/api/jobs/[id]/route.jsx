import connectMongoDB from "../../../../libs/mongodb_jobs";
import { NextResponse } from "next/server";
import Job from "@/models/jobs"


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();

    const job = await Job.findOne({ _id: id })

    return NextResponse.json({ job }, { status: 200 });

}

export async function PUT(req, { params, body }) {

    await connectMongoDB();

    try {
        const { curr_job } = await req.json()
        // console.log(curr_job);
        const { id } = params;
        // console.log(id);
        await Job.findOneAndUpdate(
            { _id: id },
            { $set: curr_job },
            { new: true }
        );
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error updating job:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
