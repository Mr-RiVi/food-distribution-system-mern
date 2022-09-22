import express from 'express'
import { celebrate, Segments } from 'celebrate'
import {
  newDrop,
  getDrop,
  updateDrop,
  deleteDrop,
} from '../controllers/Schedule_drop.js'
import { createScheduleDropsSchema } from '../validations/Schedule_drop.js'

const router = express.Router()

router.post(
  '/drop',
  celebrate({ [Segments.BODY]: createScheduleDropsSchema }),
  newDrop
) //create schedules
router.get('/:id', getDrop) //get schedules
router.put('/:id', updateDrop) //update schedules
router.delete('/:id', deleteDrop) //delete schedules

export default router
