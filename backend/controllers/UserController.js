import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({users : users});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const saveUser = async (req, res) => {
    const user = new User(req.body);
    console.log(req);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}