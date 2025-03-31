let numeros = prompt ("Digite um numero")
let numeros2 = prompt ("Digite um numero")
let resultado = null

function simbolos (){
    let simb = prompt ("escolha entre: \n 1. + (Soma) \n 2. - (Subtração) \n 3. / (Divisão) \n 4. * (Multiplicação)")

    if (simb == "+"){
        resultado = parseFloat(numeros)+ parseFloat(numeros2)
        alert ("O resultado é: " + resultado)
    }
    else if (simb == "-"){
        resultado = (numeros - numeros2)
        alert ("O resultado é: " + resultado)
    }
    else if (simb == "/"){
        resultado = (numeros / numeros2)
        alert ("O resultado é: " + resultado)
    }
    else if (simb == "*"){
        resultado = (numeros * numeros2)
        alert ("O resultado é: " + resultado)
    }
    else {
        alert ("Operação inexistente")
    }
}

simbolos()