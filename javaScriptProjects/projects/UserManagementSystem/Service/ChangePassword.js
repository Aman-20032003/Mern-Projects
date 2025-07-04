const argon2 = require('argon2');
const User = require('../Models/UserModel');

async function changePassword(data) {
    const {email,password, newPassword,confirmPassword}=data;
    const user = await User.findOne({ email: email });
    if (!user) {
        return {
            status: "404",
            message: "UserNot Found",
            success: true
        }
    };
    const verifyPass = await argon2.verify(user.password, password.trim());
    if (!verifyPass) {
        return {
            status: "401",
            message: "Invalid Password",
            success: false
        }
    }

    if (newPassword.trim() !== confirmPassword.trim()) {
        return {
            status: "400",
            message: "new password and confirm password does not match",
            success: true
        }
    }
 const hashedPassword = await argon2.hash(newPassword);
    user.password = hashedPassword;
    await user.save();

    return {
        status: 200,
        message: "Password updated successfully",
        success: true
    };
}


module.exports= changePassword;