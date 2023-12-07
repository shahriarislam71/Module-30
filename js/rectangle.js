// callingrandom background color for rectangle
document.getElementById('rectangle-background').addEventListener('click',function(event){
    randomBackground(event)
})

document.getElementById('rectangle-btn').addEventListener('click',function(){
    const rectangleInputvalue1 = InputFieldValue('rectangle-w')
    const rectangleInputvalue2 = InputFieldValue('rectangle-I')
    const rectangleArea = CalculateArea('rectangle-title',rectangleInputvalue1,rectangleInputvalue2)
    setValue('areaCalculation',document.getElementById('rectangle-title').innerText,rectangleArea)
})