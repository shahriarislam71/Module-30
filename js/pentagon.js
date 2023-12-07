// callingrandom background color for pentagon
document.getElementById('pentagon-background').addEventListener('click',function(event){
    randomBackground(event)
})

document.getElementById('pentagon-btn').addEventListener('click',function(){
    const pentagonInputvalue1 = InputFieldValue('pentagon-p')
    const pentagonInputvalue2 = InputFieldValue('pentagon-b')
    const pentagonArea = CalculateArea('pentagon-title',pentagonInputvalue1,pentagonInputvalue2)
    console.log(pentagonArea)
})