const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("✅ MongoDB Connected Successfully!")
    } catch (error) {
        console.log("❌ MongoDB Connection Failed!", error)
    }
}

module.exports = {connectDB}