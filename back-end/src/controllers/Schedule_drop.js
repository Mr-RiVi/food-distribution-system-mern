import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import {
  addDrop,
  getDropByID,
  updateDropsByID,
  deleteDropsByID,
} from '../services/Schedule_drop.js'

//Add new supply drop
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

//Get new supply drop
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

//Update supply drop
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

//Delete supply drop
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
