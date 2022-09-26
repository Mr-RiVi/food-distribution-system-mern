import mongoose from 'mongoose'
import "dotenv/config";

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, { keepAlive: true, connectTimeoutMS: 3000 })
    .catch((error) => {
      console.log(`Error connecting to MongoDB: ${error}`)
    })
  mongoose.connection.on('connected', () => {
    console.log('Connected to database successfully')
  })
  mongoose.connection.on('error', (error) => {
    console.log(`Error connecting to database: ${error}`)
  })
}

export default connectDB
