const inputFirst = document.querySelector('#first-value')
const inputSecond = document.querySelector('#second-value')

// (Фаренгейт — 32) : 1,8 = Цельсий
// Цельсий х 1,8 + 32 = Фаренгейт

inputFirst.addEventListener('input', (event) => {
  if (!event.target.value) {
    inputSecond.value = ''
  } else {
    inputSecond.value = (event.target.value - 32) / 1.8
  }
})

inputSecond.addEventListener('input', (event) => {
  if (!event.target.value) {
    inputFirst.value = ''
  } else {
    inputFirst.value = event.target.value * 1.8 + 32
  }
})
