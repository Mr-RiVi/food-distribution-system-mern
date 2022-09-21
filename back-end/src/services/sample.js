import { insertAns, viewAns } from '../repository/sample.js'

export const add = async ({ num1, num2, name }) => {
  const sum = num1 + num2

  await insertAns(name, sum)
}

export const view = async ({ name }) => {
  return await viewAns(name)
}
