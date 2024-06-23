const mongoose = require("mongoose");

function DbConnection() {
    const DB_URL = process.env.MONGO_URI;

    mongoose.connect(DB_URL,{
     useNewurlParser: true,
     useUnifiedtopology: true, 
    });
     }

     
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection Errors"));

db.once("open",function(){
   console.log("DB connected !!");
})

module.exports=DbConnection();

