import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = user.sign({userId: user._id}, process.env.JWT_SECRET,{
        expiresIn:'30d'
    });

    //set JWT-token an HTTP cookie only
    res.token('jwt', token,{
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    });
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = asyncHandler(async(req, res)=>{
    res.send('register user');
});

const logoutUser = asyncHandler(async(req, res)=>{
    res.send('logout user');
});

const getUserProfile = asyncHandler(async(req, res)=>{
    res.send('get user profile');
});

const updateUserProfile = asyncHandler(async(req, res)=>{
    res.send('update user profile');
});

const getUsers = asyncHandler(async(req, res)=>{
    res.send('get users');
});

const getUserById = asyncHandler(async(req, res)=>{
    res.send('get user by id');
});

const deleteUser = asyncHandler(async(req, res)=>{
    res.send('delete user');
});

const updateUser = asyncHandler(async(req, res)=>{
    res.send('update user');
});

export {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUser,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser
}