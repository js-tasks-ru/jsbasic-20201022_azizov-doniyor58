export const getPrice = (number) => {
  const isInteger = Number.isInteger(number)

  if (isInteger) return number.toFixed(2)

  const [euro, cents] = String(number).split('.')

  return Number(cents) > 9
    ? `${euro}.${cents}`
    : `${euro}.${cents}0`
}
