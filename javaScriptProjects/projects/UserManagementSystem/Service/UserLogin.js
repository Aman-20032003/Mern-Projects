const argon2 = require('argon2');
const User = require('../Models/UserModel');
const auth = require('../Security/Auth');


async function loginUser(data) {

    const user = await User.findOne({ email: data.email });
    if (!user) {
        return {
            status: 404,
            message: 'user not found'
        }
    };

    const verifyPasssword = await argon2.verify(user.password, data.password.trim());
    if (!verifyPasssword) {
        return {
            status: 401,
            success: false,
            message: 'Invalid Password'
        }
    };
    const token = auth.setUser(user);
    return {
        status: 200,
        user: user,
        success: true,
        token: token,
        message: 'user login successfully'
    }
}
module.exports = loginUser;