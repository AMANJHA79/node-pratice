const mongoose = require('mongoose');

const BookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true,
    },
    publicationDate:{
        type:Date,
        required:true
    }
})

module.exports=mongoose.model('Book',BookSchema);