import { Joi } from 'celebrate'

export const createScheduleDropsSchema = {
  pay_id: Joi.string(),
  warehouse_id: Joi.string().required(),
  status: Joi.string().required(),
  item_id: Joi.number().required(),
  prod_id: Joi.string().required(),
  qty: Joi.number().required(),
  manu_date: Joi.date().required(),
  exp_date: Joi.date().required(),
}
