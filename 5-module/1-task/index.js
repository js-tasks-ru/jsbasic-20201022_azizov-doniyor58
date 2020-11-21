function hideSelf() {
  const btn = document.querySelector('.hide-self-button')
  document.addEventListener('click', (e) => {
    if (e.target === btn) {
      btn.hidden = true
    }
  })
}
