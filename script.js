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
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`;
            ppp.innerHTML += `<p>Você é <strong>brasileiro (a)</strong></p>`;
        }
        else if (vel == 'Estados Unidos' || vel == 'USA') {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`;
            ppp.innerHTML += `<p>Você é <strong>americano(a)</strong></p>`;
        }
        else if (vel == 'Russia') {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`;
            ppp.innerHTML += `<p>Você é <strong>russo(a)</strong></p>`;
        }
        else if (vel == 'China') {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`;
            ppp.innerHTML += `<p>Você é <strong>chinês(a)</strong></p>`;
        }
        else {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`;
            ppp.innerHTML += `<p>Você é <strong>estrangeiro (a)</strong></p>`;
        }
    }
}