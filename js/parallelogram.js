// callingrandom background color for parallelogram
document.getElementById('parallelogram-background').addEventListener('click',function(event){
    randomBackground(event)
})


document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const parallelogramInputvalue1 = InputFieldValue('parallelogram-b')
    const parallelogramInputvalue2 = InputFieldValue('parallelogram-h')
    const parallelogramArea = CalculateArea('parallelogram-title',parallelogramInputvalue1,parallelogramInputvalue2)
    setValue('areaCalculation',document.getElementById('parallelogram-title').innerText,parallelogramArea)
})