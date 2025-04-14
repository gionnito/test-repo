const button = document.querySelector('.container-button')
const text = document.querySelector('.container-text')

button.addEventListener('click', () => {
  text.innerText === '😸' ? text.innerText = '😿' : text.innerText = '😸'
})