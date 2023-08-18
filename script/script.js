const hour = document.getElementById('hr')
const minute = document.getElementById('min')
const second = document.getElementById('sec')
const toggleClockButton = document.getElementById('toggleClock')
const hideClockButton = document.getElementById('hideclock')
const clockContainer = document.getElementById('clockcon')

let clockInterval
let clockVisible = false
const updateClock = () => {
  let date = new Date()
  let hr = date.getHours() * 30
  let min = date.getMinutes() * 6
  let sec = date.getSeconds() * 6

  hour.style.transform = `rotateZ(${hr + min / 12}deg) `
  minute.style.transform = `rotateZ(${min}deg) `
  second.style.transform = `rotateZ(${sec}deg) `
}
toggleClockButton.addEventListener('click', () => {
  if (!clockVisible) {
    clockContainer.style.display = 'block'
    clockInterval = setInterval(updateClock, 0)
  } else {
    clockContainer.style.display = 'none'
    clearInterval(clockInterval)
  }
  clockVisible = !clockVisible
})
