const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

function setUser(user) {
  const token = jwt.sign(
    {
      id: user._id, // ✅ Add this
      email: user.email
    },
    SECRET,
    {
      expiresIn: '1d'
    }
  );
  return token;
}
module.exports = {
    setUser
};
