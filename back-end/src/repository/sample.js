import Sample from '../models/sample.js'

export const insertAns = async (name, num) => {
  const sample = new Sample({ name, num })
  await sample.save()
}

export const viewAns = async (name) => {
  const result = await Sample.findOne({ filer: { name } }).lean()

  return result
}
