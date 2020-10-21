/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  return Boolean(
    ['1xBet', 'XXX']
      .map((spam) => spam.toLowerCase())
      .filter((spam) => str.toLowerCase().includes(spam))
      .length)
}
