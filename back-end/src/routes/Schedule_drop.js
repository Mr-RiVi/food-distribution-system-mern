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
) //create supply drops
router.get('/:id', getDrop) //get supply drops
router.put(
  '/:id',
  celebrate({ [Segments.BODY]: createScheduleDropsSchema }),
  updateDrop
) //update supply drops
router.delete('/:id', deleteDrop) //delete supply drops

export default router
