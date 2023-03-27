/*
    Menor que 18 - Magreza
    Entre 18 e 24 - Normal
    Entre 25 e 29 - Sobrepeso
    Entre 30 e 39 - Obesidade
    Maior que 40 - Obesidade grave

    Calculo IMC = peso / altura * altura
*/

let nome = document.getElementById('nome')
let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let resultado = document.querySelector('#resultado')



function calcular() {
    if (nome.value.length == 0 || altura.value.length == 0 || peso.value.length == 0) {
        resultado.innerHTML = 'OPS... Preencha todos os campos!'
    } else {

        let imc = peso.value / (altura.value * altura.value)
        

        if (imc < 18) {
            resultado.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(1)} e você está abaixo do peso.`
        } else if (imc >= 18 && imc <= 24) {
            resultado.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(1)} e você está Normal.`
        } else if (imc > 24 && imc <= 29) {
            resultado.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(1)} e você está em Sobrepeso.`
        } else if (imc > 29 && imc <= 39) {
            resultado.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(1)} e você está em Obesidade.`
        } else {
            resultado.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(1)} e você está em Obesidade grave.`
        } 
    }
}


