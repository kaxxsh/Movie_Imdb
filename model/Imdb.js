import mongoose from "mongoose";

const dbSchema = new mongoose.Schema({
    Movie:{
        type:String,
        required:[true,"Please enter the name"],
        unique:true,
        trim:true,
        maxlength:[100,"Movie name cannot exceed 100 characters"]
    },
    genre:{
        type:String,
        required:[true,"Please enter the genre"]
    },
    language:{
        type:String,
        required:[true,"Please enter the language"]
    },
    releasedYear:{
        type:Number,
        required:[true,"Please enter the released year"]
    },
    rating:{
        type:Number,
        required:[true,"Please enter the rating"]
    },
})

const Demo = mongoose.model("Demo",dbSchema);

export default Demo;