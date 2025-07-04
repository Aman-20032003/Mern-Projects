const express = require('express');
const { handleGenerateNewShortUrl, handleAnalaytics } = require('../controller/url');
const router = express.Router();


router.post("/", handleGenerateNewShortUrl);
router.get("/analytics/:shortId", handleAnalaytics);

module.exports = router; // ✅ Required!
