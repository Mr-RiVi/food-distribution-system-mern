import asyncHandler from '../middleware/async.js'
import {
  addSupplier,
  getSupplierById,
  deleteSupplierById,
  updateSupplierById,
  getAllSuppliers,
  checkSupplierById,
} from '../services/supplier.js'

//Insert A New Supplier
export const supplierAdd = asyncHandler(async (req, res) => {
  const ans = await addSupplier(req.body)

  res.status(200).json(ans)
})

//check Supplier id exists
export const supplierCheck = asyncHandler(async (req, res, next) => {
  const ans = await checkSupplierById(req.params.supplier_id)

  res.status(404).json(ans)
})

//Get Data Of One Supplier
export const supplierGet = asyncHandler(async (req, res) => {
  const ans = await getSupplierById(req.params.supplier_id)

  res.status(200).json(ans)
})

//Get Data Of All Suppliers
export const suppliersGet = asyncHandler(async (req, res) => {
  const ans = await getAllSuppliers()

  res.status(200).json(ans)
})

//Update Supplier Data
export const updateSupplier = asyncHandler(async (req, res) => {
  const ans = await updateSupplierById(req.params.supplier_id, req.body)
  res.send(ans)
})

//Delete A Supplier
export const deleteSupplier = asyncHandler(async (req, res) => {
  const ans = await deleteSupplierById(req.params.supplier_id)
  res.send(ans)
})