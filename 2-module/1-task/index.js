/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  return Object
    .values(salaries)
    .reduce((acc, current) => Number(current) ? acc + current : acc, 0)
}
