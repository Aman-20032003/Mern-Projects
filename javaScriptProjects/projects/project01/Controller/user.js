const User = require("../Models/user");

async function handleGetAllUsers(req, res) {
    const allUsers = await User.find({});
    res.json(allUsers);
}

async function handleGetAllUsersById(req, res) {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
}

async function createUser(req, res) {
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender) {
        res.status(400).json({ message: "All fields are required.." });
    }
    await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender
    });

    return res.status(201).json({ message: "success" });

}

async function deleteUser(req, res) {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
        return res.status(404).json({ message: "User not found with the given ID" });
    }

    res.json({ message: "User deleted successfully", user: deletedUser });

}

async function upadteAllUserDetails(req, res) {
    const userId = req.params.id;
    const updateUser = req.body;

    // Find index, not filter
    const index = users.findIndex(user => user.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    updateUser.id = userId;
    users[index] = updateUser;

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: "Failed to update user", error: err });
        }
        return res.json({ message: "User updated successfully", user: updateUser });
    });

}


async function updateUserDeatils(req, res) {
    const userId = req.params.id;
    const body = req.body;
    const findUser = await User.findByIdAndUpdate(userId, body);

    if (!findUser) {
        return res.status(404).json({ message: "user not found with id" })
    }


    res.json({ message: "User updated successfully" });
}

module.exports = {
    handleGetAllUsers, handleGetAllUsersById,
    createUser, deleteUser, upadteAllUserDetails, updateUserDeatils
}