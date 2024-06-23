//DTO-book
class issuedBook{
    _id;//special to auto genarator
    name;
    genre;
    price;
    publisher;
    issuedBy;
    issuedDate;
    returnDate;

 //when we create obj contructor will invoked =parameterised constructor
constructor(user) {
  //cons it doest not have return type
  this._id = user.issuedBook._id; //this always point cuurent obj
  this.name = user.issuedBook.name;
  this.genre = user.issuedBook.genre;
  this.price = user.issuedBook.price;
  this.publisher = user.issuedBook.publisher;
  this.issuedBy = user.issuedBy;
  this.issuedDate = user.issuedDate;
  this.returnDate = user.returnDate;

}
} 
//var ref=new issuedBook(userobj);   
module.exports = issuedBook;
