import mongoose from "mongoose";

const {Schema} = mongoose

const PaymentSchema = new mongoose.Schema({
    cardNo: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true, 
    },
    // cardholderName: {
    //     type: String,
    //     // required: true, 
    // },
    expMonth: {
        type: String,
    },
    amount: {
        type: String,
        // required: true,
    },
    cvv: {
        type: String,
        // required: true,
    },
    // featured: {
    //     type: Boolean,
    //     default: false
    // },

    
})

export default mongoose.model("Payment", PaymentSchema)