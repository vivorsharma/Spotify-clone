const User = require('../models/User');
const bcrypt = require('bcrypt');

// sign up
const signup = async (req, res) => {

    const { firstName, lastName, email, userName, password } = req.body;

    try{
      const userExist = await User.findOne({email: email});
      if(userExist){
        res.status(422).json({message: "email already exist"})
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user =  new User({firstName, lastName, email, userName, password: hashedPassword })
      await user.save();
      res.status(200).json({ success:true ,message: "user sign up successfully", user})
    }catch(err){
        res.status(500).json({success:false, message: "internal server error", err})
        
    }
}

// sign in
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email: email });
      if (!user) {
          return res.status(401).json({ success: false, message: "Invalid credentials" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
          return res.status(401).json({ success: false, message: "Invalid credentials" });
      }
      const token = await user.generateAuthToken();
      // console.log(token);
      res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000), // Set the cookie expiration time
          httpOnly: true,
      });
      res.status(200).json({ success: true, message: "User signed in successfully", user });
  } catch (err) {
      res.status(500).json({ success: false, message: "Internal server error", error: err });
  }
}


module.exports = {
    signup,
    signin,
}























// const User = require('../models/User');

// const signup = async (req, res) => {
//     const { firstName, lastName, userName, email, password, gender } = req.body;

//     try{
//         const userExist = await User.findOne({email: email})

//     if (userExist) {
//        return res.status(422).json({message: "Email already exist"});
//     }
//         const user = new User({firstName, lastName, userName, email, password, gender})
//         await user.save();
//         res.status(200).json({success: true, message: "user registered sucessfully", user})
//     }catch{
//       console.log(Error)
//       res.status(200).json({success: false, message: "Internal server error"});
//     }
// }
// const signin = async (req, res) => {
//     const { email, password} = req.body;
   
//     try{
//        const user = await User.findOne({email: email})
//        if(!user){
//           return res.status(401).json({message: "invalid credntials"});
//        }
//        const newpassword = await bcrypt.compare(password, user.password)
//        if(!newpassword){
//           return res.status(401).json({message: "invalid credntials"});
//        }
//        res.status(200).json({ success:true ,message: "user sign in successfully", user})
//     }catch(err){
//        res.status(500).json({success: false, message: "failed to login", err})
//     }
//    }
// module.exports = {
//     signup,
// }