let nome = prompt("Digite seu nome.")
let notas1 = parseFloat(prompt("Digite sua primeira nota."))
let notas2 = parseFloat(prompt("Digite sua segunda nota."))
let notas3 = parseFloat(prompt("Digite sua terceira nota."))
let notas4 = parseFloat(prompt("Digite sua quarta nota."))
let media = null
media = ((notas1 + notas2 + notas3 + notas4) / 4)

if (media >= 5){
    alert ("Você passou com a media: " + media)
}
else {
    alert("Você reprovou com a media: " + media)
}