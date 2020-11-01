/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed({ rows }) {
    const arrayOfRows = [...rows]
    
    arrayOfRows.forEach((row, index) => {
        row.cells[index].style.background = 'red'
    })
}
