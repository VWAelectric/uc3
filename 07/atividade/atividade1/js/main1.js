function converter() {
    let minutos = parseInt(document.getElementById('minutos').value)

    if (minutos === "" || minutos <= 0) {
        document.getElementById('tempoEmHoras')
            .innerText = "Por favor, insira um número válido";
        return;
    }
    let horas = 0

    while (minutos >= 60) {
        minutos = minutos - 60
        horas++
    }
    document.getElementById('tempoEmHoras').innerText = `${horas} : ${minutos.toString().padStart(2, '0')} minutos`
}