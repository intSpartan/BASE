import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb_jobs";
import Applicant from "@/models/applicant";

export async function POST(request) {
    const { name, college, company, cgpa, loginid } = await request.json();

    await connectMongoDB();

    await Applicant.create({ name, college, company, cgpa, loginid })

    return NextResponse.json({ message: "Applicant Added" }, { status: 201 });

}


export async function GET() {
    await connectMongoDB();

    const applicants = await Applicant.find();

    return NextResponse.json({ applicants });
}


export async function DELETE(request) {

    const id = request.nextUrl.searchParams.get("id");

    await connectMongoDB();

    await Applicant.findByIdAndDelete(id);

    return NextResponse.json({ message: "Deleted" });
}
