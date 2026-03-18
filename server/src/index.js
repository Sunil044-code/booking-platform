import dotenv from 'dotenv'
import connectDB from './config/constants/database.js';
import app from './app.js';
import { User } from './models/user.model.js';


dotenv.config({
    path:'./.env'
});


const startServer=async()=>{
  
    try {
          await connectDB();
    app.on('error',(error)=>{
        console.log("ERROR",error);
        throw error;
    });

    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Port is sucessfully running ${process.env.PORT}`)
    })
  
    } catch (error) {
        console.log("Error connecting error")
    }
}
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
 

