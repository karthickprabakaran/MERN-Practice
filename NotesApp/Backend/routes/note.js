import express from "express";
import Note from "../models/Note";
import middleware from "../middleware/middleware";


const Noterouter = express.Router();



Noterouter.post('/add',middleware, async (req,res)=>{

    try{
        const {title,description} = req.body;

        const newNote = new Note({
            title,
            description,
            userId: req.user.id
        });
        
        await newNote.save();

        return res.status(200).json({success: true, message: " Note Created Successfully"});

    }
    catch(error){
        console.log(error.message);
        
        res.status(500).json({success: true, message: error});

    }

});



export default Noterouter;
