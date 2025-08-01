require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoute');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors({
  origin:'http://localhost:5174',
  credentials:true
}));

app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/user', userRouter);

app.get('/user/validate', (req, res) => {
  const token = req.cookies.token;
  console.log("Cookies:", req.cookies); 

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log("Decoded token:", decoded); 

    return res.status(200).json({
      success: true,
      userId: decoded.id, 
      email: decoded.email
    });
  } catch (err) {
    console.error("Token verification error:", err); 
    return res.status(401).json({ message: "Invalid or expired token" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}......`);
});
