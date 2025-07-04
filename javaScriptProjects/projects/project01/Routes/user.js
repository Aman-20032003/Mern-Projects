const express = require('express');
const User = require("../Models/user")
const { handleGetAllUsers, handleGetAllUsersById, createUser,
    deleteUser, upadteAllUserDetails, updateUserDeatils } = require('../Controller/user')
const router = express.Router();


router.route('/').get(handleGetAllUsers).post(createUser)

router.get("/:id", handleGetAllUsersById);

router.delete("/:id", deleteUser);

router.put("/:id", upadteAllUserDetails)

router.patch("/:id", updateUserDeatils);

// router.get('/users', (async (req, res) => {

//     const allUsers = await User.find({});
//     const html = `
//     <ul>
// ${allUsers.map((user) => `<li> ${user.first_name} - ${user.email} </li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// }));




// app.route('/api/users/:id')
//     .get((req, res) => {
//         const id = Number(req.params.id);
//         const user = users.find(user => user.id === id);
//         return res.json(user);
//     })
//     .post((req, res) => {
//        return res.json({message:"craete api is pending now ...."})
//     });










module.exports = router;