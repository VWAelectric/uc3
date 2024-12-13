const display = document.getElementById('display')
const buttons = document.querySelectorAll('.btn')
const clearButton = document.getElementById ('clear')
const calculatorButton = document.getElementById('calculator')

buttons.forEach(btn => {
    btn.addEventListener('click',() =>{
        display.value += btn.getAttribute ('data-value')
    })
})

clearButton.addEventListener('click', () => {
    display.value = ""
})

calculatorButton.addEventListener('click', () =>{
    display.value = eval(display.value)
})

function deleteLast(){
    display.value = display.value.slice(0, -1)
}