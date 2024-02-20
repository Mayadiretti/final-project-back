import mongoose from "mongoose";
import dayjs from "dayjs";

const {Schema, SchemaTypes, model} = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 40,
        trim: true,
    },
    last_name:{
        type: String,
        required: true,
        minLength: 1,
        maxLength: 40,
        trim: true,
    },
    birth_date:{
        type: Date,
        required: true,
        max: () => {
            const now= dayjs();
            const fiveYearsAgo = now.subtract(5, "years");
            return fiveYearsAgo.format("YYYY-MM-DD")
        },
    },
    recipes:{
        type: [SchemaTypes.ObjectId],
        ref: "Chef" ,
    }
});

const author = model('author', schema);
export default author;