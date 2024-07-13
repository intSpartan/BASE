import connectMongoDBI from "@/libs/mongodb";
import Company from "@/models/company";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectMongoDBI();
    const company = await Company.findOne({ companyId: id });

    if (company === null) {
      return NextResponse.json(
        { message: "Company details not found" },
        { status: 404 }
      );
    } else {
      return NextResponse.json({ company }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
