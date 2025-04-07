function fnSomar(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) + parseFloat(n2)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnSubtrair(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = n1 - n2
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnMultiplicar(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) * parseFloat(n2)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnDividir(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) / parseFloat(n2)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}