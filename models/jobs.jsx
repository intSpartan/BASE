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
         }
    }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobsSchema);

export default Job;
