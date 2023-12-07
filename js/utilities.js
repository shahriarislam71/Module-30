// function for random background color
function randomBackground(eventt) {
  let x = Math.floor(Math.random() * 256)
  let y = Math.floor(Math.random() * 256)
  let z = Math.floor(Math.random() * 256)
  let bgColor = `rgb(${x}, ${y}, ${z})`
  eventt.target.style.background = bgColor;
}

// function for finding input field value
function InputFieldValue(Id) {
  const inputId = document.getElementById(Id)
  return parseFloat(inputId.value)
}

// function for calculating area
function CalculateArea(Id, value1, value2) {
  const propertyName = document.getElementById(Id)
  if (propertyName.innerText === 'Triangle') {
    return 0.5 * value1 * value2
  }
  else if (propertyName.innerText == 'Rectangle') {
    return value1 * value2
  }
  else if (propertyName.innerText === 'Parallelogram') {
    return value1 * value2
  }
  else if (propertyName.innerText === 'Rhombus') {
    return 0.5 * value1 * value2
  }
  else if (propertyName.innerText === 'Pentagon') {
    return 0.5 * value1 * value2
  }
  else {
    return 3.14 * value1 * value2
  }

}

function createId(value){
  return value
}

// function for setting area
function setValue(place, properties, value) {
  const setPlace = document.getElementById(place)
  const createDiv = document.createElement('div')
  createDiv.setAttribute('id', createId(properties))
  const p1 = document.createElement('p')
  p1.innerText = properties
  createDiv.appendChild(p1)
  const p = document.createElement('p')
  p.innerText = value + ' cm^2'
  createDiv.appendChild(p)
  const btn = document.createElement('button')
  btn.setAttribute('id',createId(value))
  btn.innerText = 'convert to m^2'
  createDiv.appendChild(btn)
  setPlace.appendChild(createDiv)

  document.getElementById(createId(properties)).style.display = 'flex'
  document.getElementById(createId(properties)).style.alignItems = 'center'
  document.getElementById(createId(properties)).style.justifyContent = 'space-around'
  document.getElementById(createId(value)).style.background = '#1090D8'
  document.getElementById(createId(value)).style.borderStyle = 'none'
  document.getElementById(createId(value)).style.borderRadius = '8px'
}
