function Verificar() {
    var pais = document.getElementById("pais")
    var ppp = document.getElementById("ppp")
    var vel = (pais.value)

    if (vel == "") {
        alert('[ERRO] Digite um nome de um país')
        ppp.innerHTML = `Impossível verificar`
    }
    else {
        if (vel == 'Brasil') {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`

            ppp.innerHTML += `<p>Você é <strong>brasileiro (a)</strong></p>`
        }
        else {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`

            ppp.innerHTML += `<p>Você é <strong>estrangeiro (a)</strong></p>`
        }
    }
}
