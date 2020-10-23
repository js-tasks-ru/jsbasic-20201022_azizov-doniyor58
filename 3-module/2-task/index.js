/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  const isRange = (num) => num >= a && num <= b
    
  return arr.filter(isRange)
}
