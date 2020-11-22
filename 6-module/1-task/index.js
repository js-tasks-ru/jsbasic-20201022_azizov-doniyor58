/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table')

    const thead =
    `<thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>`

    const tableInner = rows
      .map((row)=> {
        const rowValues = Object.values(row)

        const rowDatas = rowValues
          .map((value) => `<td>${value}</td>`)
          .join('')

        return `
          <tr>
            ${rowDatas}
            <td><button>X</button></td>
          </tr>
          `
      })
      .join('')

    const tbody = `
      <tbody>
        ${tableInner}
      </tbody>
    `

    this.elem.innerHTML = `
      ${thead}
      ${tbody}
    `

    this.elem.addEventListener('click', (e) => this.onClick(e))
  }

  onClick(e) {
    if (e.target.tagName !== 'BUTTON') return

    const tr = e.target.closest('tr')

    tr.remove()
  }
}
