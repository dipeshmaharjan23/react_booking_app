const User = require('../models/Hotel.js')

const createUser = async (req, res, next) => {
    const newUser = new User(req.body)

    try {
        const saved = await newUser.save()
        res.status(200).json(savedUser)

    } catch (err) {
        next(err)
    }
}
const updateUser = async (req, res, next) => {
    try {

        const updatedUser= await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)

    } catch (err) {
        next(err)
    }
}
const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")

    } catch (err) {
        next(err)
    }
}
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)

    } catch (err) {
        next(err)
    }
}

const getAllUser = async(req,res,next)=>{
    try {
        const Users = await User.find() ;
        res.status(200).json(Users)

    } catch (err) {
        next(err)
    }
}

module.exports = {createUser,updateUser,deleteUser,getUser,getAllUser};

