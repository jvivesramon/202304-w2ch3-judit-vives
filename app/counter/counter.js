let count = 0

const messageOver10 = `El contador no puede pasar de 10.`
const messageLessThan0 = `El contador no puede bajar de 0.`

let counterDisplay = document.querySelector('h1')
counterDisplay.innerHTML = count

const messageLimitTNumbers = document.querySelector('h2')
messageLimitTNumbers.innerHTML = messageOver10
messageLimitTNumbers.style.display = 'none'

const buttonForIncrement = document.querySelector('.increment')
const buttonForDecrement = document.querySelector('.decrement')
const buttonForRestart = document.querySelector('.restart')

buttonForIncrement.addEventListener('click', () => {
  messageLimitTNumbers.style.display = 'none'
  if(count > 9){
    messageLimitTNumbers.innerHTML = messageOver10
    messageLimitTNumbers.style.display = ''
    return
  }
  count ++
  counterDisplay.innerHTML = count
})

buttonForDecrement.addEventListener('click', () => {
  messageLimitTNumbers.style.display = 'none'

  if(count < 1){
    messageLimitTNumbers.innerHTML = messageLessThan0
    messageLimitTNumbers.style.display = ''
    return
  }
  count --
  counterDisplay.innerHTML = count
})

buttonForRestart.addEventListener('click', () => {
  messageLimitTNumbers.style.display = 'none'

  count = 0
  counterDisplay.innerHTML = count
})
