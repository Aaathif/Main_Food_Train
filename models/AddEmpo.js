import mongoose from "mongoose";

const AddEmpoSchema = new mongoose.Schema({
    eId: {
        type: String
    },
    name: {
        type: String,
        // required: true,
    },
    nationality: {
        type: String,
        // required: true, 
    },
    NIC: {
        type: String,
        // required: true,
    },
    gender: {
        type: String,
        // required: true,
    },
    dob: {
        type: String,
        // required: true,
    },
    contactNumber: {
        type: String,
        // required: true,
    },
    address: {
        type: String,
        // required: true,
    }

},
    { timestamps: true } 
)

export default mongoose.model("AddEmpo", AddEmpoSchema)