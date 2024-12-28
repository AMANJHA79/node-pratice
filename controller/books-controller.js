const Book = require('../model/book-schema')



const GetAllBooks=async (req,res)=>{
    try{
        const book= await Book.find();
        if(!book){
            return res.status(404).json({message:'No book found'})
        }
        return res.status(200).json({
            success: true,
            allBooks: book.length,
            data: book
        })

    }
    catch(error){
        res.status(500).json({message: error.message})
    }

}

const SingleBook=async (req,res)=>{
    try{

        const book= await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({message:'No book found'})
        }
        return res.status(200).json({
            success: true,
            data: book
        })

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const PostBook=async (req,res)=>{
    try{
        const {title,author,publicationDate}=req.body;
        if(!title||!author||!publicationDate){
            return res.status(400).json({message:'Please provide all required fields'})
        };
        const newBook=new Book({title,author,publicationDate});
        const savedBook=await newBook.save();
        res.status(201).json({
            success: true,
            data: savedBook
        })


    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


const updateBook =async (req,res)=>{
    try{
        const book=await Book.findByIdAndUpdate({
            _id: req.params.id
        })
        if(!book){
            return res.status(404).json({message:'No book found'})
        }

        const UpdateBook=({
            title: req.body.title || book.title,
            author: req.body.author || book.author,
            publicationDate: req.body.publicationDate || book.publicationDate
        })
        const updatedBook=await book.updateOne(UpdateBook)
        res.status(200).json({
            success: true,
            data: updatedBook
        })

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


const deleteBook =async (req,res)=>{
    const book=await Book.findByIdAndDelete(req.params.id)
    if(!book){
        return res.status(404).json({message:'No book found'})
    }
    res.status(200).json({
        success: true,
        message: 'Book deleted successfully'
        })

}





module.exports = {
    GetAllBooks,
    SingleBook,
    PostBook,
    updateBook,
    deleteBook
}