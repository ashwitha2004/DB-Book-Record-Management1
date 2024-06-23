const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookById,
} = require("../controllers/book-controller");
// Data import
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
// const { route } = require("./users");

// const BookModal = require("../modals/book-modals");
// const UserModal = require("../modals/user-modals");


// Local Router
const router = express.Router();

const {UserModal,BookModal}=require("../modals/index");
//const { getAllBooks } = require("../controllers/book-controller");


/**
 * Route: /books/:id
 * Method: GET
 * Decsription: Get Book By Its Id
 * Access: Public
 * Paramaters: ID
 */
router.get("/:id", getSingleBookById);


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

/**
 * Route: /books
 * Method: GET
 * Decsription: Get All Books
 * Access: Public
 * Paramaters: None
 */
router.get("/", getAllBooks);
// router.get("/", (req, res) => {
//   res.status(200).json({ success: true,message:"Got all the Books", data: books });
// });

/**
 * Route: /books/issued/by-user
 * Method: GET
 * Decsription: Get all issued books
 * Access: Public
 * Paramaters: None
 */
// router.get("/issued/by-user",getAllIssuedBooks);
/**
 * Route: /books
 * Method: POST
 * Decsription: Create or Add a new Book
 * Access: Public
 * Paramaters: None
 * Data: Author, Name, Genre, Price, Publisher, Id
 */
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

router.get("/", addNewBook);

/**
 * Route: /books/:id
 * Method: PUT
 * Decsription: Update a Bookk By Its ID
 * Access: Public
 * Paramaters: Id
 */
 router.put("/updateBook/:id", updateBookById);

// Default Export
module.exports = router;
//when we go with { we should write return after =. function}