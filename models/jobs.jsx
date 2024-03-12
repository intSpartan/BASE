import mongoose, { Schema } from "mongoose";

const jobsSchema = new Schema(
    {
        title: String,
        description: String,
        companyid: String,
        curr_state: String,
        applicantsApplied: { type: [String], default: [] },
        applicantsInterview: {
            type: Schema.Types.Mixed
        },
        mcqs: Number,
        coding_questions: Number,
        OA_candidates: { type: [String], default: [] },
        OA_scores: [
            {
                id: {
                    type: String,
                },
                score: {
                    type: Number,
                    default: 0,
                },
            },
        ],
    }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobsSchema);

export default Job;
