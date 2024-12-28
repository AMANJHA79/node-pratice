const mongoose = require('mongoose');


const connectToDb= async (req, res) =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

module.exports=connectToDb;