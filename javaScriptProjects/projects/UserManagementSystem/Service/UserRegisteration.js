

const argon2 = require('argon2');
const User = require('../Models/UserModel');

async function registeration({email,userName,password}) {
    const exisitingUser = await User.findOne({ email: email });
    if (exisitingUser) {
        return {
            status: 409,
             success:false,
            message: 'user already exists'
        }
    }
    else if (!email.trim()) {
        return {
            status: 400,
            message: 'Email Is Required'
        }
    }
    else if (!password.trim()) {
        return {
            status: 400,
            message: 'Password Is Required'
        }
    }
    else if (!userName.trim()) {
        return {
            status: 400,
            message: 'UserName Is Required'
        }
    };
    const hashedPassword = await argon2.hash(password);
    const user = new User({
        userName: userName,
        email: email,
        password: hashedPassword
    })
    await user.save();
    return {
        status:201,
         success:true,
        message: "user registered successfully"
    }
};


module.exports = registeration;