// Nível Básico***
// Exercício 1
// let num = prompt("Digite um número:");

// if (num > 0) {

//     console.log("Positivo.");

// } else if (num < 0) {

//     console.log("Negativo.");

// } else {

//     console.log("É zero.")

// }



// Exercício 2
// let num2 = prompt ("Digite um número:");

// if (num2 % 2 == 0) {

//     console.log("É par.");

// } else {

//     console.log("É ímpar.")

// }



// Exercício 3
// let idade = prompt ("Digite sua idade:");

// if (idade <= 12 ) {

//     console.log("Criança.");

// } else if (idade >= 18 ) {

//     console.log("Adulto")

// } else {

//     console.log("Adolescente")

// }



// Exercício 4
// let prova = prompt ("Olá usuário! Digite a nota de seu aluno.");

// if (prova >= 60 ) {

//     console.log("Aprovado! Uhuul Parabéns! :).");

// } else {59

//     console.log("Reprovado... Pegue seu banquinho e vaza -_-.");

// }


// *******


// Nível Intermediário***
// Exercício 1
let num1 = parseFloat(prompt("Insira o primeiro número:"));
let num2 = parseFloat(prompt("Insira outro número:"));
let operacao = prompt("Insira a operação. Ex: +, -, *, /.");

let resultado = null;

switch (operacao) {
  case "+":

    resultado = num1 + num2;

    break;

  case "-":

    resultado = num1 - num2;

    break;

  case "*":

    resultado = num1 * num2;

    break;

  case "/":

    if (num2 == 0) {
        console.log("Você não pode dividir um número por zero.");
    } else {
        resultado = num1 / num2;
        console.log("resultado", resultado);
    }

    break;

  default:

    console.log("Operador inválido.");

    break;
}

if (operacao != "/") {

  console.log("resultado", resultado);

}

// Exercício 2
// let num1 = parseFloat(prompt("Insira o primeiro número:"));
// let num2 = parseFloat(prompt("Insira o segundo número:"));
// let num3 = parseFloat(prompt("Insira o terceiro número: "));

// if (num1 > num2 && num1 > num3) {

//   console.log("Número maior é o:", num1);

// } else {

//   if (num2 > num1 && num2 > num3) {

//     console.log("Número maior é o:", num2);

//   } else {

//     if (num3 > num1 && num3 > num2) {

//       console.log("Número maior é o: ", num3);

//     }

//   }

// }

// Exercício 3


// Exercício 4


// *******


// Nível Avançado***
// Exercício 1


// Exercício 2


// Exercício 3


// Exercício 4