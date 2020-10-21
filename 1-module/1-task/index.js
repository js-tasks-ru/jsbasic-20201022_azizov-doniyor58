/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n-1)
}
