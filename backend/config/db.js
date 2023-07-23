require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongoose connected to database");
    } catch (error){
        console.error("Mongoose connection Fail");
        process.exit(1);
    }
};
module.exports= connectDB;