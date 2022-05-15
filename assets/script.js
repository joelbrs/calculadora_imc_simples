// Primeiro, ao calcular o IMC da pessoa, utilizaremos a fórmula: peso / (altura * altura)
// Logo abaixo do botão, especificar um parágrafo com a seguinte informação: "Joel, seu IMC é {valor} e você está {acima/abaixo/peso adequado}" 

//Usaremos como base asseguintes informações:

// Saudável - 18,5 a <25
// Sobrepeso - 25 a <30
// Obesidade Grau 1 - 30 a<35
// Obesidade Severa - 35 a <40
// Obesidade Mórbida - >=40

let inputNome = document.getElementById("nome")
let inputAltura = document.getElementById("altura")
let inputPeso = document.getElementById("peso")

function calcular() {

let nome = inputNome.value
let altura = inputAltura.value
let peso = inputPeso.value
let resultado= document.getElementById("resultado")

let valorIMC = peso / (altura * altura)

let classificacao = ""

if (valorIMC < 18.5){

    classificacao = "Magro"

}else if (valorIMC < 25) {

    classificacao = "Saudável"

}else if (valorIMC < 30){

    classificacao = "em Sobrepeso"

}else if (valorIMC < 35){

    classificacao = "em Obesidade Grau 1"

}else if (valorIMC < 40){

    classificacao = "em Obesidade Severa"

}else{

    classificacao = "em Obesidade Mórbida"

}

resultado.innerHTML = `<p>${nome}, seu IMC é ${Math.round(valorIMC)} e você está ${classificacao}.</p>`

}







