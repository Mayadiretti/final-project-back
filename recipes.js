import mongoose from "mongoose";

const {Schema, SchemaTypes, model} = mongoose;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 150,
        trim: true,
    },
    author:{
        type: SchemaTypes.ObjectId,
        ref: "Chef" ,
        required: true, 
    }
});

const Recipe = model('Recipe', schema);
export default Recipe;