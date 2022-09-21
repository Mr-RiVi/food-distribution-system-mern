import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import { isCelebrateError } from 'celebrate'
import router from './routes/index.js'
import connectDB from './config/dbConnect.js'
import makeResponse from './middleware/response.js'

dotenv.config()

const app = express()
app.use(express.json({ limit: '1mb' }))
app.use(cors())

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server Up and Running' })
)
app.use('/api/batch', batchRouter)

connectDB()

app.use((err, req, res, next) => {
  if (isCelebrateError(err)) {
    for (const [key, value] of err.details.entries()) {
      return makeResponse({
        res,
        status: 422,
        message: value.details[0].message,
      })
    }
  } else if (err.expose) {
    return makeResponse({ res, status: err.status, message: err.message })
  } else
    return makeResponse({
      res,
      status: 500,
      message: 'Internal server error',
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
