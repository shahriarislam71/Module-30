// function for random background color
function randomBackground(eventt){
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let bgColor = `rgb(${x}, ${y}, ${z})`
    eventt.target.style.background = bgColor;
  }
  