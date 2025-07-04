const forgetPassService = require('../Service/ForgotPassword');

async function handleForgetPass(req, res) {
    const response = await forgetPassService(req.body);
    if (!response || response.status !== 200) {
        res.json(response);
    }
    res.json(response);
}
module.exports= handleForgetPass;