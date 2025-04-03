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

function fnIdiomaPortugues(){
    document.getElementById("menu1").innerText = "Inicio"
    document.getElementById("menu2").innerText = "Serviços"
    document.getElementById("menu3").innerText = "Contato"
}

function fnIdiomaIngles(){
    document.getElementById("menu1").innerText = "Home"
    document.getElementById("menu2").innerText = "Services"
    document.getElementById("menu3").innerText = "Contact"
}

function fnIdiomaArabicMoroccan(){
    document.getElementById("menu1").innerText = "بدء"
    document.getElementById("menu2").innerText = "خدمات"
    document.getElementById("menu3").innerText = "الاتصال"
}

function fnBanner1(){
    document.getElementById("banner").src="imagens/ilustracao.jpg"
}
function fnBanner2(){
    document.getElementById("banner").src="imagens/ilustracao2.jpg"
}
function fnBanner3(){
    document.getElementById("banner").src="imagens/ilustracao3.jpg"
}

function fnTrocarImagem1(){
    document.getElementById("imagem1").src="imagens/cachorro-4.jpg"
}
function fnVoltarImagem1(){
    document.getElementById("imagem1").src="imagens/cachorro-1.jpg"
}   

function fnTrocarImagem2(){
    document.getElementById("imagem2").src="imagens/cachorro-3.jpg"
}
function fnVoltarImagem2(){
    document.getElementById("imagem2").src="imagens/cachorro-2.jpg"
}   

function fnTrocarImagem3(){
    document.getElementById("imagem3").src="imagens/gato-1.jpg"
}
function fnVoltarImagem3(){
    document.getElementById("imagem3").src="imagens/cachorro-3.jpg"
}   