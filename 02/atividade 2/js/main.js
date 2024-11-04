function exibirInformacoes() {
    let idade = prompt('Informe sua idade')
    let nome = document.getElementById("nomeInput").value
    document.getElementById("saida").innerText = nome
    document.getElementById("saida").innerText = 'Olá, meu nome é: '  + ' ' + nome + '\n '
    + 'Tenho: ' + idade + ' ' + 'anos';
}     

