// callingrandom background color for rhombus
document.getElementById('rhombus-background').addEventListener('mousemove',function(event){
    randomBackground(event)
})

document.getElementById('rhombus-btn').addEventListener('click',function(){
    const rhombusInputvalue1 = InputFieldValue('rhombus-d1')
    const rhombusInputvalue2 = InputFieldValue('rhombus-d2')
    if (!isNaN(rhombusInputvalue1) || !isNaN(rhombusInputvalue2)) {
        const rhombusArea = CalculateArea('rhombus-title', rhombusInputvalue1, rhombusInputvalue2)
        setValue('areaCalculation', document.getElementById('rhombus-title').innerText, rhombusArea)
        clearInputValue('rhombus-d1', 'rhombus-d2')
    }
})