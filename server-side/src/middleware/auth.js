const User = require("../features/Users/userModel");
const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).send({ message: "Please login !!" });
  }
  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData._id);
    next();
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};

const isAuthorize = async (req, res, next) => {
  const role = req.body.user.role;
  if (role != "admin") {
    return res
      .status(401)
      .send({ message: "You are not authorized to do this function" });
  }
  next();
};

module.exports = { isAuthenticated, isAuthorize };
