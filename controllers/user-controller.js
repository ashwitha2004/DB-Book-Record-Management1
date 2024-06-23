const { UserModal, BookModal } = require("../modals/index");
const userModals = require("../modals/user-modals");
//const issuedBook = require("../dtos/book-dto");

// router.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: users,
//   });
// });
exports.getAllUsers = async(req,res)=>{
     const users =await UserModal.find();

     if(users.length ===0){
        return res.status(404).json({
            success: false,
            message:"No users found in the DB",

        });
     }
     res.status(200).json({
    success: true,
    message:"There are the users info: ",
    data: users,
  });
};
// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === id);

//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User Does Not Exist",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     data: user,
//   });
// });
exports.getSingleUserById=async(req,res)=>{
  const { id } = req.params;
  const user = await userModals.findById({_id:id});
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Does Not Exist",
      });
    }
    return res.status(200).json({
      success: true,
      message:"user not found",
      data: user,
    });
  
};
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;

//   const user = users.find((each) => each.id === id);

//   if (!user)
//     return res
//       .status(404)
//       .json({ success: false, message: "User Does Not Exist" });

//   const updatedUser = users.map((each) => {
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
//     data: updatedUser,
//   });
// });
exports.updateUserData=async(req,res)=>{
  const { id } = req.params;
  const { data } = req.body;
  const_updatedUserDate = await userModal.findOneAndUpdate(
    {_id:id},
    {$set:{
        ...data
    }},
    {new:true}//to get updated data
  );
  return res.status(200).json({
    success: true,
    message:"User Updated ...",
    data: updatedUserDate,
  });

};
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === id);

//   if (!user)
//     return res.status(404).json({ success: false, message: "User Not Found" });

//   const index = users.indexOf(user);
//   users.splice(index, 1);

//   return res.status(200).json({ success: true, data: users });
// });
exports.deleteUser=async(req,res)=>{
    const {id}=req.params;
    const user= await userModal.deleteone({_id:id});
    if (!user){
   return res.status(404).json({ 
success: false,
 message: "User Not Found",
 });
    }
    return res.status(200).json({ success: true,message:"deleted user.." ,data: users 

    });
};

// router.post("/", (req, res) => {
//   const { id, name, surname, email, subscriptionType, subscriptionDate } =
//     req.body;

//   const user = users.find((each) => each.id === id); //each is variable meant each and every element of a particular array var if can use anything name here

//   if (user) {
//     return res.status(404).json({
//       success: false,
//       message: "User With the Id already exists",
//     });
//   }
//   users.push({
//     id,
//     name,
//     surname,
//     email,
//     subscriptionType,
//     subscriptionDate,
//   });
//   return res.status(201).json({
//     success: true,
//     data: users,
//   });
// });
exports.createNewUser= async(req,res)=>{
    const { id, name, surname, email, subscriptionType, subscriptionDate } =
      req.body;
}