const forgetPassService = require('../Service/ChangePassword');

async function changePass(req, res) {
    const response = await forgetPassService(req.body);

    if (!response || response.status !== 200) {
        return res.json(response);
    }
    return res.json(response);
}
module.exports=changePass;