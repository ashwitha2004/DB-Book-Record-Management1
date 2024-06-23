const { UserModal, BookModal } = require("../modals/index");
const issuedBook = require("../dtos/book-dto")
//const issuedBook = require("../dtos/book-dto");
//const getAllBooks = () => {};
exports.getAllBooks =async(req,res) =>{
    const books = await BookModal.find();

    if(books.length === 0){
        return res.status(404).json({
         success:false,
         message:"No Book found"   
        })
    }
    //console.log(data);
    return res.status(200).json({
      success: true,
      data:"Books",
    });
};//we can use const or esxports





// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const book = books.find((each) => each.id === id);

//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: "Book Does Not Exist",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     data: book,
//   });
// });

exports.getSingleBookById = async(req,res) =>{
  const { id } = req.params;
  const book = await BookModal.findById(id);//here we using await rather than using json file

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book Does Not Exist",
    });
  }
    return res.status(200).json({
    success: true,
    message:"found the Book by their id",
   data: book,
 });
};

// router.get("/issued/by-user", (req, res) => {
//   const usersWithIssuedBooks = users.filter((each) => {
//     //filter for multiple elements to be return
//     if (each.issuedBook) return each;
//   });

//   const issuedBooks = [];

//   usersWithIssuedBooks.forEach((each) => {
//     const book = books.find((book) => book.id === each.issuedBook);
//     //find for geting one rtuen o/p
//     book.issuedBy = each.name;
//     book.issuedDate = each.issuedDate;
//     book.returnDate = each.returnDate;

//     issuedBooks.push(book);
//   });
//   if (issuedBooks.length === 0) {
//     return res.status(404).json({
//       success: false,
//       message: "No books have been issued yet.",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     message: "users with the issuedBooks",
//     data: issuedBooks,
//   });
// });

exports.getAllIssuedBooks=async(req,res)=>{
  const users = await UserModel.find({
    issuedBook : {$exists:true}
  }).populate("issuedBook");
// data transfer object(DTO)


   const issuedBooks =users.map((each)=>new issuedBooks(each));
  if (issuedBooks.length === 0) {
    return res.status(404).json({ 
      success: false,
       message: "No books have been issued yet.", 
      });
  }
  return res.status(200).json({ 
    success: true,
    message:"users with the issuedBooks" ,
    data: issuedBooks,
   });

}
// router.post("/", (req, res) => {
//   const { data } = req.body;

//   if (!data) {
//     return res.status(400).json({
//       success: false,
//       message: "No data provided to add a book",
//     });
//   }

//   const book = books.find((each) => each.id === data.id);

//   if (book) { return res.status(404).json({
//         success: false,
//         message: "Book with the given ID already exists",
//       });
//   }

//   const allBooks = [...books, data];
//   return res.status(200).json({ 
//     success: true,
//     message:"Added book sucessfully",
//      data: allBooks
//      })
// });
exports.addNewBook = async(req,res)=>{
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({
      success: false,
      message: "No data provided to add a book",
    });
  }
  await BookModal.create(data);
   const allBooks = await BookModal.find();

     return res.status(201).json({ 
     success: true,
    message:"Added book sucessfully",
      data: allBooks
          });  
};

// router.put("/updateBook/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;

//   const book = books.find((each) => each.id === id);

//   if (!book) {
//     return res.status(400).json({
//       success: false,
//       message: "Book with the given Id not found",
//     });
//   }

//   const updatedBook = books.map((each) => {
//     if (each.id === id) {
//       return {
//         ...each,
//         ...data,
//       };
//     }
//     return each;
//   });
//   return res.status(200).json({
//     success: true,
//     message: "updated this book by their id",
//     data: updatedBook,
//   });
// });
exports.updateBookById = async(req,res)=>{
    const { id } = req.params;
    const { data } = req.body;

    const updateBook =await BookModal.findOneAndUpdate({
      _id: id,
    },data,{
  new:true,
 });
    return res.status(200).json({
    success: true,
    message: "updated this book by their id",
    data: updatedBook,
  });
};
 //module.exports = (getAllBooks,getSingleBookById,getAllIssuedBooks);

