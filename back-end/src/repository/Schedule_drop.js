import SupplyDrop from '../models/Schedule_drop.js'
import mongoose from 'mongoose'

//Add schedules
export const createDrop = async (data) => {
  try {
    const addDrop = new SupplyDrop({
      pay_id: data.pay_id,
      warehouse_id: data.warehouse_id,
      status: data.status,
      supply_drop_item: {
        item_id: data.item_id,
        prod_id: data.prod_id,
        qty: data.qty,
        manu_date: data.manu_date,
        exp_date: data.exp_date,
      }, //test
    })
    await addDrop.save()
    return { msg: 'New Schedule drop added' }
  } catch (error) {
    return { msg: 'Schedule drop not added' }
  }
}

//Get schedule details
export const getDrops = async (id) => {
  return await SupplyDrop.findById(mongoose.Types.ObjectId(id))
}

//Update schedules
export const updateDrops = async (id, ob) => {
  try {
    await SupplyDrop.findByIdAndUpdate(id, ob)
    return { msg: 'Schedule drop updated successfully' }
  } catch (error) {
    return { msg: 'Schedule drop update failed' }
  }
}

//Delete schedules
export const deleteDrops = async (id) => {
  try {
    await SupplyDrop.findByIdAndDelete(id)
    return { msg: 'Schedule drop successfully deleted' }
  } catch (error) {
    return { msg: 'Schedule drop deletion failed' }
  }
}
