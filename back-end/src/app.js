import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import router from './routes/index.js'
import connect from './config/database.connection.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limit: '1mb' }))

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server Up and Running' })
)
app.use('/api', router)

const port = process.env.PORT || 3002

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
  connect()
})
