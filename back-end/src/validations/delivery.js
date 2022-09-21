import { Joi } from 'celebrate'

export const viewDeliverySchema = {
  delivery_id: Joi.string().hex().length(24).required(),
}

export const createDeliverySchema = {
  from: Joi.string().hex().length(24).required(),
  to: Joi.string().hex().length(24).required(),
  driver_id: Joi.string().hex().length(24).required(),
  vehicle_id: Joi.string().hex().length(24).required(),
  start_datetime: Joi.date().required(),
  end_datetime: Joi.date().required(),
}
