/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ul = document.createElement('ul')

  friends.forEach(({ firstName, lastName }) => {
    const li = document.createElement('li')

    li.innerHTML = `${firstName} ${lastName}`
    ul.appendChild(li)
  })

  return ul
}
