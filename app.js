const express = require('express')
const {connectToDb ,getDb } = require('./db')


// mmiddleware


const app = express()



//db connections
let db;

connectToDb( (err)=>{
    if(!err){
      app.listen(3000, ()=>{console.log('app is listening on port 3000')})  

    db = getDb()
    }
    
})

//routes

app.get("/books" , (req,res) =>{

    let books = []

    db.collection('books').find()//returns cursor,set of things
    .sort({author:1})
    .forEach(book =>books.push(book))
        .then(()=>{
            res.status(200).json(books).catch(
                () => {
                    res.status(500).json({messg:"could not fetch the documents"})
                    
                    
                }
            )
        })

        })