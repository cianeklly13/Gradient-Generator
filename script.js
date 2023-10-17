const css = document.querySelector('h4')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const range1 = document.getElementById('range1')
const range2 = document.getElementById('range2')
const body = document.querySelector('body')
let direction = 90
function changeColor(){
  body.style.background = `linear-gradient(${direction}deg, ${color1.value} ${range1.value}%, ${color2.value} ${range2.value}%)`
  css.textContent = body.style.background
  console.log(body.style.background)
}
changeColor()

function checkDirection(event){
  switch (event.keyCode) {
    case 37:
      direction = 270;
      break;
    case 38:
      direction = 0;
      break;
    case 39:
      direction = 90;
      break;
    case 40:
      direction = 180;
      break;
  }
  console.log(direction)
  changeColor()
}


color1.addEventListener("input", changeColor)
color2.addEventListener("input", changeColor)
range1.addEventListener("input", changeColor)
range2.addEventListener("input", changeColor)
document.addEventListener('keydown', checkDirection)