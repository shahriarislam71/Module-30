// function for random background color
function randomBackground(eventt){
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let bgColor = `rgb(${x}, ${y}, ${z})`
    eventt.target.style.background = bgColor;
  }

// function for finding input field value
function InputFieldValue(Id){
  const inputId = document.getElementById(Id)
  return parseFloat(inputId.value)
}

// function for calculating area
function CalculateArea(Id,value1, value2){
  const propertyName = document.getElementById(Id)
  if (propertyName.innerText === 'Triangle'){
    return 0.5*value1*value2
  }
  else if (propertyName.innerText == 'Rectangle'){
    return value1*value2
  }
  else if (propertyName.innerText === 'Parallelogram'){
    return value1*value2
  }
  else if (propertyName.innerText === 'Rhombus'){
    return 0.5*value1*value2
  }
  else if(propertyName.innerText === 'Pentagon'){
    return 0.5*value1*value2
  }
  else{
    return 3.14*value1*value2
  }

}
  