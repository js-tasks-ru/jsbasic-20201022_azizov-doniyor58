/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const arrayOfNumbers = str
    .replace(/,/gm, ' ')
    .replace(/[а-яА-ЯёЁa-zA-Z|+]/gm, '')
    .split(' ')
    .filter((el) => Boolean(el))
    .map((str) => Number(str))


  return {
    min: Math.min(...arrayOfNumbers),
    max: Math.max(...arrayOfNumbers)

  }
}
