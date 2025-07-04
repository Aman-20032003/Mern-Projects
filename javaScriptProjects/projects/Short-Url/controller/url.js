const express = require('express');
const shortId = require('shortid');

const url = require('../models/url');

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ message: "url is required" });
    const Id = shortId(8);
    await url.create({
        urlId: Id,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy:req.user._id
    });
    return res.json({ id: Id });

}

async function handleAnalaytics(req, res) {
    const shortId = req.params.shortId;
    const result = await url.findOne({ urlId: shortId });
    console.log(result);

    if (!result) {
        return res.status(404).json({ message: "Short URL not found" });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}


module.exports = {
    handleGenerateNewShortUrl,
    handleAnalaytics,



}