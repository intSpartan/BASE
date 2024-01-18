import mongoose, {Schema} from "mongoose"

const companySchema = new Schema(
    {
        companyName : {
            type: String,
            required : true
        },
        linkedin : {
            type: String,
            required: true

        },
        websiteURL:{
            type: String,
            required: true
        },
        description : {
            type: String,
            required: true
        },
        logo : {
            type: Buffer,
            required: true
        },
        




    }
)

module.exports = mongoose.model('Company',companySchema)