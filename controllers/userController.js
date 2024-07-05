const userModel = require('../models/userModel');

//login callback
const loginController = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email,password});
        if(!user){
            return res.status(404).send('User not found');
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            error,
        });
    }
};

//register callback
const registerController = async (req,res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({
            success: true,
            newUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        });
    }
};

const getAllUsers = async (req,res) => {
    try {
        const users = await userModel.find({})
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = {loginController, registerController, getAllUsers};