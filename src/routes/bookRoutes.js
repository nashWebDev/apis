const express = require('express')
const router = express.Router()
const Book = ("../models/books")

const app = express()

router.get("../books" , async (req, res) =>{
    try{
        const books = await Book.find();
        res.json(books)

    }catch{
        res.status(500).json({message:err.message})
    }
})
module.exports=router;