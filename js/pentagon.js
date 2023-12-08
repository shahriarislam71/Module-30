// callingrandom background color for pentagon
document.getElementById('pentagon-background').addEventListener('mousemove',function(event){
    randomBackground(event)
})

document.getElementById('pentagon-btn').addEventListener('click',function(){
    const pentagonInputvalue1 = InputFieldValue('pentagon-p')
    const pentagonInputvalue2 = InputFieldValue('pentagon-b')
    if (!isNaN(pentagonInputvalue1) || !isNaN(pentagonInputvalue2)) {
        const pentagonArea = CalculateArea('pentagon-title', pentagonInputvalue1, pentagonInputvalue2)
        setValue('areaCalculation', document.getElementById('pentagon-title').innerText, pentagonArea)
        clearInputValue('pentagon-p', 'pentagon-b')
    }
})