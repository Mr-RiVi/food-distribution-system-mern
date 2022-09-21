import mongoose from 'mongoose'

const connectDB = async () => {
  //console.log(process.env.MONGO_URI)

  mongoose
    .connect(process.env.MONGO_URI, { keepAlive: true, connectTimeoutMS: 3000 })
    .catch((error) => {
      console.log('Error')
      logger.error('Error connecting to database')
      // logger.error(`Error connecting to MongoDB: ${error}`)
    })
  mongoose.connection.on('connected', () => {
    console.log('Connected to database successfully')
    // logger.info('Connected to database successfully')
  })
  mongoose.connection.on('error', (error) => {
    logger.error('Error connecting to database')
    // logger.error(`Error connecting to database: ${error}`)
  })
}

export default connectDB
