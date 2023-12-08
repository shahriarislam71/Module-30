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
  if (isNaN(inputId.value) || inputId.value === ''){
    alert('Please enter a number')
  }
  else{
    return parseFloat(inputId.value)
  }
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

// This function will generate new id for the newly created tag
function createId(){
  return Math.random()*1000
}

// function for getting the serial numbers for area calculation
function gettingNumbers(){
  const areaCalculationId = document.getElementById('areaCalculation').innerText
  if (areaCalculationId.includes('Triangle') || areaCalculationId.includes('Rectangle') || areaCalculationId.includes('Parallelogram') || areaCalculationId.includes('Rhombus') || areaCalculationId.includes('Pentagon') || areaCalculationId.includes('Ellipse')){
    count+=1
    return count
  }
  else{
    count = 1
    return count
  }

}

// function for setting area
function setValue(place, properties, value) {
  const setPlace = document.getElementById(place)
  const createDiv = document.createElement('div')
  let newId = createId()
  createDiv.setAttribute('id', newId)
  const p2 = document.createElement('p')
  p2.innerText = gettingNumbers() + '.'
  createDiv.appendChild(p2)
  const p1 = document.createElement('p')
  p1.innerText = properties
  createDiv.appendChild(p1)
  const p = document.createElement('p')
  p.innerHTML = value + 'cm' + '<sup>2</sup>'
  createDiv.appendChild(p)
  const btn = document.createElement('button')
  let buttonNewId = createId()
  btn.setAttribute('id',buttonNewId)
  btn.innerHTML = 'convert to m'+ '<sup>2</sup>'
  createDiv.appendChild(btn)
  setPlace.appendChild(createDiv)

  document.getElementById(newId).style.display = 'flex'
  document.getElementById(newId).style.alignItems = 'center'
  document.getElementById(newId).style.justifyContent = 'space-around'
  document.getElementById(buttonNewId).style.background = '#1090D8'
  document.getElementById(buttonNewId).style.borderStyle = 'none'
  document.getElementById(buttonNewId).style.borderRadius = '8px'
}

// this function will clear the input field
function clearInputValue(value1,value2){
  const value1Id = document.getElementById(value1)
  value1Id.value = ''
  const value2Id = document.getElementById(value2)
  value2Id.value = ''
}