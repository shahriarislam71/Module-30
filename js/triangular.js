// callingrandom background color for triangle
document.getElementById('triangle-background').addEventListener('click',function(event){
    randomBackground(event)
})

document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleInputvalue1 = InputFieldValue('triangle-b')
    const triangleInputvalue2 = InputFieldValue('triangle-h')
    const triangleArea = CalculateArea('traiangle-title',triangleInputvalue1,triangleInputvalue2)
    console.log(triangleArea)
})