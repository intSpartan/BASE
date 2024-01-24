import mongoose, { Schema } from "mongoose";

const jobsSchema = new Schema(
    {
        title: String,
        description: String,
        companyid: String,
        curr_state: String,
        applicantsApplied: { type: [String], default: [] },
    }
);

const Job = mongoose.models.Joba || mongoose.model("Joba", jobsSchema);

export default Job; 