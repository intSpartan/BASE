import connectMongoDBI from "@/libs/mongodb";
import Company from "@/models/company";
import { NextResponse } from "next/server";
// import connectMongoDB from "@/libs/mongodb";

export async function POST(request) {
  try {
    // Parse JSON data from the request body
    const { companyId, companyName, linkedin, website, description, logo } = await request.json();

    // Log the parsed data for debugging
    console.log("Received data:", companyId, companyName, description, linkedin, website, logo);

    // Validate the presence of required fields
    if (!companyName || !description || !linkedin || !website) {
      return NextResponse.json({ message: "Missing required fields in the request" }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDBI();

    // Create a new Company document
    await Company.create({
      companyId,
      companyName,
      linkedin,
      website,
      description,
      logo,
    });

    // Return a success response
    return NextResponse.json({ message: "Company Details Added" }, { status: 201 });
  } catch (error) {
    // Log the error for debugging
    console.error('Error:', error);

    // Return an error response
    return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}