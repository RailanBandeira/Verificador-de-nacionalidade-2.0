function limpar() {
    document.getElementById("pais").value = ""
}

function Verificar() {
    var pais = document.getElementById("pais");
    var ppp = document.getElementById("ppp");
    var vel = (pais.value)

    document.getElementById("brasilFlag").style.display = "none";
    document.getElementById("usaFlag").style.display = "none";
    document.getElementById("russiaFlag").style.display = "none";
    document.getElementById("chinaFlag").style.display = "none";

    if (vel == "") {
        alert('[ERRO] Digite o nome de um país');
        ppp.innerHTML = `Impossível verificar`;
    } else {
        if (vel == 'Brasil') {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`;
            ppp.innerHTML += `<p>Você é <strong>brasileiro (a)</strong></p>`;
            document.getElementById("brasilFlag").style.display = "inline";
        } 
        else if (vel == 'Estados Unidos' || vel == 'USA') {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`;
            ppp.innerHTML += `<p>Você é <strong>americano(a)</strong></p>`;
            document.getElementById("usaFlag").style.display = "inline";
        } 
        else if (vel == 'Russia') {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`;
            ppp.innerHTML += `<p>Você é <strong>russo(a)</strong></p>`;
            document.getElementById("russiaFlag").style.display = "inline";
        } 
        else if (vel == 'China') {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`;
            ppp.innerHTML += `<p>Você é <strong>chinês(a)</strong></p>`;
            document.getElementById("chinaFlag").style.display = "inline";
        }
        else {
            ppp.innerHTML = `<p>Seu país é <strong>${vel}</strong></p>`;
            ppp.innerHTML += `<p>Você é <strong>estrangeiro (a)</strong></p>`;
        }
    }
}