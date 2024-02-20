import express  from "express";
import Recipe from "../models/recipe";

const router = express.Router();

router.post('/', async (req, res) => {

    if(!req.body){
        return res.status(400).send('you must send a recipe! ');
    }
    
    try{
        const recipe = await recipe.create(req.body);
        return res.send(Recipe)
    }catch (error){
        return res.status(400).send(error.message);
    }
});

export default router;
