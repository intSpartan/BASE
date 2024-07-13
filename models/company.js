import mongoose, { Schema } from "mongoose";

const companySchema = new Schema({
    companyId: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        // required: true,
    },
    website: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    logo: {
        type: String,
        // required: true
    },
});
const Company =
    mongoose.models.Company || mongoose.model("Company", companySchema);
export default Company;
// module.exports = mongoose.model('Company',companySchema)
