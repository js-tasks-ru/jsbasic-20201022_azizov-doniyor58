function toggleText() {
  const btn = document.querySelector('.toggle-text-button')
  const text = document.getElementById('text')

  document.addEventListener('click', (e) => {
    if (e.target !== btn) return

    text.hidden = !text.hidden
  })
}
