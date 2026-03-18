import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect
        (`${process.env.MONGODB_URI}`)

        console.log(`\n connection succesfull!! ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log('Error connecting',error)
        process.exit(1)
    }
}

export default connectDB