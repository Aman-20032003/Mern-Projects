const argon2 = require('argon2');
const User = require('../Models/UserModel');

async function forgetPass(data) {
    const { email } = data;
    const user = await User.findOne({ email: email })
    if (!user) {
        return {
            status: 404,
            message: "User Not Found",
            success: false
        }
    };

    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!';
    const length = 10;
    let newPassword = '';
    for (let i = 0; i < length; i++) {
        newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const hashedPassword = await argon2.hash(newPassword);
    user.password = hashedPassword;
    await user.save();
    return {
        status: 200,
        message: `password forgetted successfully new password is ${newPassword}`,
        success: true
    }
}
module.exports=forgetPass;