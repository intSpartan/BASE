import mongoose, { Schema } from "mongoose";

const jobsSchema = new Schema(
    {
        title: String,
        description: String,
        companyid: String,
        curr_state: String,
        applicantsApplied: { type: [String], default: [] },
        mcqs: Number,
        coding_questions: Number,

    }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobsSchema);

export default Job; 