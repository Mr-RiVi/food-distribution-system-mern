import {
  createDrop,
  getDrops,
  updateDrops,
  deleteDrops,
} from '../repository/Schedule_drop.js'

//Add supply drop
export const addDrop = async ({
  pay_id,
  warehouse_id,
  status,
  item_id,
  prod_id,
  qty,
  manu_date,
  exp_date,
}) => {
  const data = {
    pay_id,
    warehouse_id,
    status,
    supply_drop_item: {
      item_id: Number(item_id),
      prod_id,
      qty: Number(qty),
      manu_date: Date(manu_date),
      exp_date: Date(exp_date),
    },
  }
  const x = await createDrop(data)
  //console.log('Service test', x)
  return x.msg
}

//Get Supply drop
export const getDropByID = async (id) => {
  return await getDrops(id)
}

//Update Supply drop
export const updateDropsByID = async (id, ob) => {
  const y = await updateDrops(id, ob)
  return y
}

//Delete Supply drop
export const deleteDropsByID = async (id) => {
  return await deleteDrops(id)
}
