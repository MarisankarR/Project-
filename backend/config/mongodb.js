import mongoose from "mongoose";

const connectDB = async () =>{
    
    mongoose.connection.on('connected',() => {
        console.log("MONGODB Connected Scuccessful");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/PROJECT`)
}

export default connectDB;
