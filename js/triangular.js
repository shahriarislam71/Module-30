// callingrandom background color for triangle
document.getElementById('triangle-background').addEventListener('mousemove',function(event){
    randomBackground(event)
})

document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleInputvalue1 = InputFieldValue('triangle-b')
    const triangleInputvalue2 = InputFieldValue('triangle-h')
    if (!isNaN(triangleInputvalue1) || !isNaN(triangleInputvalue2)) {
        const triangleArea = CalculateArea('triangle-title', triangleInputvalue1, triangleInputvalue2)
        setValue('areaCalculation', document.getElementById('triangle-title').innerText, triangleArea)
        clearInputValue('triangle-b', 'triangle-h')
    }
})