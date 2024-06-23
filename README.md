# Mongo-DB
 ITS is a non relational data base(relation: it has rows and columns in it nthg but tables)
 # Relations=>Tables
 # Rows => Tuples
 # coloumns=> attributes
# in Non-relational DB any can relate other tables without any connections
## its is unstructured
## why we use databse:
data redudency,isolation,atomicity,consistency,durability,scalability to handle large datasets

Data >> json (csv) >> schemless

## https://mongoosejs.com/

## npm install mongoose --save for intialisation

## online mongodb   https://cloud.mongodb.com/
## https://cloud.mongodb.com/v2#/org/664a1de9aa0cbd5509bb03a7/projects/create
## mongodb+srv://ashwithareddy:dbuserashwith@mongo-db.84vkzct.mongodb.net/?retryWrites=true&w=majority&appName=Mongo-DB


MVC Arch => controllers
>> Modal (it depicts the structure of mongodb collections)
>> view (wrt frontend (reacts))
>> Controller(btrain or logical part of a route)
      >> books.controllers.js
      >> users.controllers.js


Schema >>
  id: string
  name:string
  age:number
  gender:char/varchar(15)


Modal >>
   id:123
   name:devtown
   age:20
   gender:'f'


foreing Key :
>> Referential integrity

Users Table                               Books Table
issuedBook: 2(Foreing key here)            issuedbook:2(primary key)

<!---

router.get("/issued/by-user", (req, res) => {
//   const usersWithIssuedBooks = users.filter((each) => {//filter for multiple elements to be return
//     if (each.issuedBook) return each;
//   });

//   const issuedBooks = [];

//   usersWithIssuedBooks.forEach((each) => {
//     const book = books.find((book) => book.id === each.issuedBook);
// //find for geting one rtuen o/p
//     book.issuedBy = each.name;
//     book.issuedDate = each.issuedDate;
//     book.returnDate = each.returnDate;

//     issuedBooks.push(book);
//   });
//   if (issuedBooks.length === 0) {
//     return res.status(404).json({ 
//       success: false,
//        message: "No books have been issued yet.", 
//       });
//   }
//   return res.status(200).json({ 
//     success: true,
//     message:"users with the issuedBooks" ,
//     data: issuedBooks,
//    });
// });


---->
DTO//transfering data from one obj to other obj
var obj1:{
  name:
age:
id:
gender:
}
--DTO---
var obj2:{
name:
age:
id:
gender:
}

mongodb+srv://ashwithareddy:<password>@mongo-db.84vkzct.mongodb.net/?retryWrites=true&w=majority&appName=Mongo-
mongodb+srv://ashwithareddy:ashwithareddy@cluster0.wljwhzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0