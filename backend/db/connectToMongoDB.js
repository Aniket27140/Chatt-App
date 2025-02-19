import mongoose from "mongoose";

const connectToMongoDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("DB connected")
    }
    catch(error){
        console.log("Error connecting to DB", error.message)
    }
}
export default connectToMongoDB