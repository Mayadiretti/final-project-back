import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const {PORT, MONGODB_URI} = process.env;

const app = express();

app.use(morgan('dev'));
app.use(express.json())


mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log('connected succesfully')
    app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`);
    });
})
.catch(err => console.error(err));
