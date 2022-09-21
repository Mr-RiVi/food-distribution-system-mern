import express from 'express'

import { sampleAdd, sampleView } from '../controllers/sample.js'

const sampleRouter = express.Router()

sampleRouter.post('/add', sampleAdd)
sampleRouter.get('/view', sampleView)

export default sampleRouter
