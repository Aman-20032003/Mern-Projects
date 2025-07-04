const express = require('express');
const connectDb= require("./connect");
const url= require("./models/url")
const urlRoute=require('./routes/url');
const path = require("path");
const cookieParser= require('cookie-parser');
const{restictToUserLoggedInOnly}= require('./middleware/auth')

const userRoute= require('./routes/user');

const app = express();

const PORT= 8000;
app.use(express.json());
connectDb("mongodb://127.0.0.1:27017/short-url");

app.use(cookieParser());
app.use('/url',restictToUserLoggedInOnly,urlRoute);
app.use('/user',userRoute);

app.use(express.urlencoded({extended:false}));
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await url.findOne({ urlId: shortId });

    if (!entry) {
        return res.status(404).send('Short URL not found');
    }

    // Push visit history timestamp
    entry.visitHistory.push({ timestamp: Date.now() });
    await entry.save();

    // Redirect to the original URL
    res.redirect(entry.redirectUrl);
});




app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})