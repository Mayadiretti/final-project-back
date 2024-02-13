import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
const {PORT, MONGO_URI} = process.env;

const app = express();

app.use(morgan('dev'));
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`);
});