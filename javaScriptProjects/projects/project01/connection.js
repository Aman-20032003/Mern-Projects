const mongoose = require('mongoose');
async function connectMongodb(url) {

    return mongoose
        .connect(url)
        .then(console.log('mongodb connected successfully'))
        .catch(err => console.log('mongodb error', err)
        )

}
module.exports={
    connectMongodb,
}