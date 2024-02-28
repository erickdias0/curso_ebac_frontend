const form = document.getElementById('form-compara')
const message = document.getElementById('message')

form.addEventListener('submit', function(e){
    e.preventDefault()

    let num1 = parseFloat(document.getElementById('num-1').value)
    let num2 = parseFloat(document.getElementById('num-2').value)
    message.style.display = 'block'
    message.style.backgroundColor ='red'
    if(num2>num1){
        message.innerHTML = 'Correto! ' + num2 + ' é maior que ' + num1 + '.'
        message.style.backgroundColor = 'green'
    }else if(num2<num1){
        message.innerHTML = num2 + ' não é maior que ' + num1 + ' !'
    } else{
        message.innerHTML = 'Os números são iguais'
    }

})

form.addEventListener('change', function(e){
    message.style.display = 'none'
})