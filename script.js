const inputFirst = document.querySelector('#first-value')
const inputSecond = document.querySelector('#second-value')
const inputThird = document.querySelector('#third-value')

// (Фаренгейт — 32) : 1,8 = Цельсий
// Цельсий х 1,8 + 32 = Фаренгейт

inputFirst.addEventListener('input', (event) => {
  if (!event.target.value) {
    inputSecond.value = ''
    inputThird.value = ''
  } else {
    inputSecond.value = ((Number(event.target.value) - 32) / 1.8).toFixed(3)
    inputThird.value = (
      ((Number(event.target.value) - 32) * 5) / 9 +
      273.15
    ).toFixed(3)
  }
})

inputSecond.addEventListener('input', (event) => {
  if (!event.target.value) {
    inputFirst.value = ''
    inputThird.value = ''
  } else {
    inputFirst.value = (Number(event.target.value) * 1.8 + 32).toFixed(3)
    inputThird.value = (Number(event.target.value) + 273.15).toFixed(3)
  }
})

inputThird.addEventListener('input', (event) => {
  if (!event.target.value) {
    inputFirst.value = ''
    inputSecond.value = ''
  } else {
    inputFirst.value = (
      (Number(event.target.value - 273.15) * 9) / 5 +
      32
    ).toFixed(3)
    inputSecond.value = (Number(event.target.value) - 273.15).toFixed(3)
  }
})
