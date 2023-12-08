// callingrandom background color for parallelogram
document.getElementById('parallelogram-background').addEventListener('mousemove',function(event){
    randomBackground(event)
})


document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const parallelogramInputvalue1 = InputFieldValue('parallelogram-b')
    const parallelogramInputvalue2 = InputFieldValue('parallelogram-h')
    if (!isNaN(parallelogramInputvalue1) || !isNaN(parallelogramInputvalue2)) {
        const parallelogramArea = CalculateArea('parallelogram-title', parallelogramInputvalue1, parallelogramInputvalue2)
        setValue('areaCalculation', document.getElementById('parallelogram-title').innerText, parallelogramArea)
        clearInputValue('parallelogram-b', 'parallelogram-h')
    }
})