// callingrandom background color for ellipse
document.getElementById('ellipse-div').addEventListener('click',function(event){
    randomBackground(event)
})

document.getElementById('ellipse-btn').addEventListener('click',function(){
    const ellipseInputvalue1 = InputFieldValue('ellipse-a')
    const ellipseInputvalue2 = InputFieldValue('ellipse-b')
    const ellipseArea = CalculateArea('ellipse-title',ellipseInputvalue1,ellipseInputvalue2)
    setValue('areaCalculation',document.getElementById('ellipse-title').innerText,ellipseArea)
})