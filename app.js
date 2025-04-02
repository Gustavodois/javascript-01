function fnSaudacao(){
    let nomeCompleto =""
    nomeCompleto = prompt("informe seu nome completo:")
    alert("Seja bem vindo(a) " + nomeCompleto + " ao meu site!")
}

function fnTrocarCorDeFundo(){
    let cor = prompt ("Informe uma cor: \n 1-azul \n 2-Vermelho \n 3-preto \n 4-Verde \n 5-Rosa \n 6-Laranja")
    let corDeFundo = null
    
    if(cor == "1"){
        corDeFundo = "blue"
    }
    else if(cor =="2"){
        corDeFundo = "red"
    }
    else if(cor == "3"){
        corDeFundo = "black"
    }
    else if(cor =="4"){
        corDeFundo = "green"
    }
    else if(cor == "5"){
        corDeFundo = "pink"
    }
    else if(cor == "6"){
        corDeFundo = "orange"
    }
    else{
        corDeFundo = "white"
    }
    
    document.body.style.backgroundColor = corDeFundo
}

function fnMostrarHoraAtual(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    alert("Hora atual: " + (hours) +":"+  (minutes) +":"+(seconds));
}

function fnTrocarTiutlo(){
    let titulonovo = prompt("Digite o novo título para o site")
    document.getElementById("titulo").innerText = titulonovo
}
