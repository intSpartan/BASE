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
        OA_candidates: { type: [String], default: [] },
        Interview_candidates: { type: [String], default: [] },

    }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobsSchema);

export default Job; 