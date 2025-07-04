
const mongoose = require('mongoose');




const urlSchema = new mongoose.Schema({
    urlId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true

    },

    visitHistory: [{ timestamp: { type: Number } }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
}
)


const url = mongoose.model('url', urlSchema);

module.exports = url;