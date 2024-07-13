import mongoose, { Schema } from "mongoose";

const jobsSchema = new Schema(
    {
        title: String,
        role: String,
        stipendSalary: String,
        locations: String,
        jobDescription: String,
        skillsRequired: String,
        eduQualifications: String,
        experienceRequired: String,
        startingDate: String,
        endingDate: String,
        graduationYear: String,
        companyid: String,
        curr_state: String,
        companyName: String,
        applicantsApplied: { type: [String], default: [] },
        applicantsResumeShortlist: { type: [String], default: [] },
        applicantsInterviewShortlist: { type: [String], default: [] },

        applicantsInterview: {
            type: Schema.Types.Mixed
        },
        mcqs: Number,
        coding_questions: Number,
        time: String,
        OA_candidates: { type: [String], default: [] },
        Final_Selects: { type: [String], default: [] },
        OA_scores: [
            {
                candidate_id: {
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
