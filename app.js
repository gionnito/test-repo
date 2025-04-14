const button = document.querySelector('.container-button')
const text = document.querySelector('.container-text')

button.addEventListener('click', () => {
  if (text.innerText === '😸') {
    text.innerText = '😿'
  } else {
    text.innerText = '😸'
  }
})