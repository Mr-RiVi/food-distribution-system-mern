import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
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
  // res.send(ans)
  return makeResponse({
    res,
    status: 207,
    data: ans,
    message: 'New supply drop created',
  })
})

//Get new schedule
export const getDrop = asyncHandler(async (req, res) => {
  const ans = await getDropByID(req.params.id)
  // res.json(ans)
  return makeResponse({
    res,
    status: 208,
    data: ans,
    message: 'Supply drop retrieved',
  })
})

//Update schedules
export const updateDrop = asyncHandler(async (req, res) => {
  const ans = await updateDropsByID(req.params.id, req.body)
  // res.send(ans)
  return makeResponse({
    res,
    status: 209,
    data: ans,
    message: 'Supply drop updated',
  })
})

//Delete schedules
export const deleteDrop = asyncHandler(async (req, res) => {
  const ans = await deleteDropsByID(req.params.id)
  // res.send(ans)
  return makeResponse({
    res,
    status: 204,
    data: ans,
    message: 'Supply drop deleted',
  })
})
