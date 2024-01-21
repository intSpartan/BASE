import mongoose, { Schema } from "mongoose";

const applicantSchema = new Schema(
    {
        name: String,
        college: String,
        company: String,
        cgpa: String,
        loginid : String,
    }
);

const Applicant = mongoose.models.Applicant || mongoose.model("Applicant", applicantSchema);

export default Applicant; 