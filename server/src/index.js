import dotenv from 'dotenv'
import connectDB from './config/constants/database.js';
import app from './app.js';
import { User } from './models/user.model.js';


dotenv.config({
  path: './.env',
});

const startServer = async () => {
  try {
    await connectDB();

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
});

startServer();

// const testUser=async()=>{
//     try {
//         const user=await User.create({
//         userName: "Test",
//       email: "test123@gmail.com",
//       password: "test@123",
//       role: "user"
//         })
//         console.log("test user Created",user)
//     } catch (error) {
//         console.log("Failed to create!",error)
//     }
// };
// testUser();
