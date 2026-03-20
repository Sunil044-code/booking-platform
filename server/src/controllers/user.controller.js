import { User } from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';

//  Create User (Register)
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password, role = 'user' } = req.body;

  if (!userName || !email || !password) {
    throw new ApiError(400, 'All fields are required.');
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw new ApiError(400, 'Please provide a valid email address.');
  }

  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw new ApiError(409, 'User already exists with this email.');
  }

  const user = await User.create({
    userName,
    email: email.toLowerCase(),
    password,
    role,
  });

  // remove password from response
  const createdUser = await User.findById(user._id).select('-password');

  res.status(201).json(
    new ApiResponse(201, createdUser, 'User created successfully!')
  );
});


//  Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required.');
  }

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    throw new ApiError(401, 'Invalid email or password.');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, 'Invalid email or password.');
  }

  res.status(200).json(
    new ApiResponse(
      200,
      {
        user: {
          id: user._id,
          userName: user.userName,
          email: user.email,
          role: user.role,
        },
      },
      'User Logged In!!'
    )
  );
});


//  Logout User (basic version)
const logoutUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email?.toLowerCase() });

  if (!user) {
    throw new ApiError(404, "User not found!!!!");
  }

  res.status(200).json(
    new ApiResponse(200, {}, "User logged out successfully")
  );
});


//  Get All Users
const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password');

  res.status(200).json(
    new ApiResponse(200, users, "Users fetched successfully!!")
  );
});


export { registerUser, getAllUser, loginUser, logoutUser };