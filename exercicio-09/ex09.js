let salario = parseFloat(prompt("Digite seu salário para ver como ficaria com o reajuste."))
let reajuste = parseFloat(prompt("Digite a porcentagem do reajuste."))
let resultado = salario + (salario*(reajuste/100))

alert ("Seu salário com reajuste ficaria: " + resultado)