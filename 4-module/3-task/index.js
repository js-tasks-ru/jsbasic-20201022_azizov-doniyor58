/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const arrayOfRows = [...table.tBodies[0].rows]

    const AGE = 1
    const GENDER = 2
    const STATUS = 3

    arrayOfRows.forEach(({ cells }) => {
        cells[STATUS].hasAttribute('data-available')
            ? cells[STATUS].dataset.available === 'true'
                ? cells[STATUS].closest('tr').classList.add('available')
                : cells[STATUS].closest('tr').classList.add('unavailable')

            : cells[STATUS].closest('tr').setAttribute('hidden', '')


        cells[GENDER].innerHTML === 'm'
            ? cells[GENDER].closest('tr').classList.add('male')
            : cells[GENDER].closest('tr').classList.add('female')


        Number(cells[AGE].innerHTML) < 18
        ?  cells[AGE].closest('tr').style.textDecoration = 'line-through'
        : null
    })
}
