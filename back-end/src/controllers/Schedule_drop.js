import asyncHandler from '../middleware/async.js'
import {
  addDrop,
  getDropByID,
  updateDropsByID,
  deleteDropsByID,
} from '../services/Schedule_drop.js'

//Add new schedule
export const newDrop = asyncHandler(async (req, res) => {
  const ans = await addDrop(req.body)
  //console.log('Controller testing', ans)
  res.send(ans)
})

//Get new schedule
export const getDrop = asyncHandler(async (req, res) => {
  const ans = await getDropByID(req.params.id)
  res.json(ans)
})

//Update schedules
export const updateDrop = asyncHandler(async (req, res) => {
  const ans = await updateDropsByID(req.params.id, req.body)
  res.send(ans)
})

//Delete schedules
export const deleteDrop = asyncHandler(async (req, res) => {
  const ans = await deleteDropsByID(req.params.id)
  res.send(ans)
})
