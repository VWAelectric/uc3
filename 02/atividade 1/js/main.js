let nome = prompt ('Qual é o seu nome?')
let cor = prompt ('Qual é a cor de fundo?')
let cores = prompt ('Qual a cor de texto?')


document.getElementById('idName').innerText = nome
document.getElementById('container').style.backgroundColor = cor
document.getElementById('idName').style.color = cores