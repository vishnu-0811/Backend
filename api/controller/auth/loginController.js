const bcrypt = require("bcrypt");
const User = require("../../model/userModel");
const { JwtService, JwtServices } = require("../../services");
// const { User } = require("../../model/userModel");
// const Register = require("../../User/models/registerModel");

const loginController = {
  
    async login(req, res) {
    let userLog;
    try {
      const { email, password } = req.body;
      userLog = await User.findOne({ email });
      console.log(req.body) 


      if (!userLog) {
        console.log("Invalid email");

        return res.json({ status: 401, error: "Invalid email" });
      }
      // console.log(userLog);
      const passwordValidate = await bcrypt.compare(password, userLog.password);
      if (!passwordValidate) {
        return res.json({ status: 401, error: "Invalid Password" });
      }
      console.log("password",passwordValidate);

      const accessToken = JwtServices.sign(
        {
          _id: userLog._id,
        },
        "30m"
      );

      const refreshToken = JwtServices.sign(
        {
          _id: userLog._id,
        },
        "1y",
        REFRESH_SECRET
      );
      console.log(accessToken)
      return res.status(200).json({ accessToken, refreshToken });
    } 

    catch (error) {
      console.log(error)
      return res.json({ status: 500, error: "server error", serverError: error });
    }
 
  },
};

module.exports = loginController;