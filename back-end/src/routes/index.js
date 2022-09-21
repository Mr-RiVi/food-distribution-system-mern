import express from 'express'
import drop_router from './Schedule_drop.js'

const router = express.Router()

//router.use('/sample', sampleRouter)
//  console.log('inside index.routes')
//  res.status(200).json({ status: 'works' })

router.use('/new', drop_router)

export default router
