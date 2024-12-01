import connectMongoDBI from "../../../libs/mongodb";
import Company from "../../../models/company";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { companyId, companyName, linkedin, website, description, logo } =
      await request.json();

    console.log(
      "Received data:",
      companyId,
      companyName,
      description,
      linkedin,
      website,
      logo
    );

    // if (!companyName || !description || !linkedin || !website) {
    //   return NextResponse.json(
    //     { message: "Missing required fields in the request" },
    //     { status: 400 }
    //   );
    // }

    await connectMongoDBI();

    await Company.create({
      companyId,
      companyName,
      linkedin,
      website,
      description,
      logo,
    });

    return NextResponse.json(
      { message: "Company Details Added" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
