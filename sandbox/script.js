console.log("Hello World!");

var idade = 22;
var idade = "Vinte e dois";
console.log(idade);

let nome = "Maisa";
nome = "Bomfim";
nome = "Santos"
console.log(nome);

const cargo = "Aluna";
console.log(cargo);

// Exercício 3 
const nome_ = "Maisa";
let idade_ = 22;

let mensagem = `Meu nome é ${nome_}, tenho ${idade_} anos.`;

console.log(mensagem);

// Tipos primitivos
console.log(typeof nome_);
console.log(typeof idade_);

let maiorDeIdade = true;
let TemFilhos = false;

let tamanho;
console.log(tamanho);

let vazio = null;
console.log(vazio)

// Exercício 3 - Tipos primitivos
let a = 10;
let b = "Maisa";
let c = "10";
let d = 20;

console.log("a + b", a + b);
console.log("a + c", a + c);
console.log("a + d", a + d);

let n1 = "42.5123";
n1 = Number(n1);
console.log(n1);

console.log(parseInt(n1));

console.log(parseFloat("40.12Ae"));

// Condicionais
const idade___ = 16

if (idade___ < 18) {

    console.log("Menor de idade");

}

else if (idade___ === 18){

    console.log("Acabou de atingir a maior idade");

}

else {
    
    console.log("Maior de idade");
}