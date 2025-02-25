// Nível básico***
// Atividade 1 usando o FOR

function exercicioRep01 () {

    for (let contador = 1; contador <= 10; contador++) {

        console.log("Contagem: ", contador);
    
    }

    let divDelogs = document.querySelector(".logs");

    let paragrafo = document.createElement("p");

    paragrafo.innerHTML = "Exercicio 01 de repetição executado.";

    divDelogs.appendChild(paragrafo);

}

//////////////////////////////////////////////

// Atividade 1 usando o WHILE
function exercicioRep02 () {
    let contador = 1;
    while (contador <= 5) {

    console.log("Contagem: ", contador);
    contador++

    }
}

//////////////////////////////////////////////

// Atividade 1 usando o DO
// let mensagem = "";
// do {

// mensagem = prompt("Digite um texto");

// } while (mensagem != "sair");

// console.log("Saiu!");

///////////////////////////////////////////////

// Atividade 2 usando o FOR
// let num = prompt("insira um número: ");

// for (let contador = 1; contador <= 10; contador++){

//     let ValorCalculado = num * contador;

//     let mensagem = `${num} x ${contador} = ${ValorCalculado}`;

//     console.log(mensagem);

// }

///////////////////////////////////////////////

// Atividade 3 usando N, While e For
// let num = parseInt(prompt("Insira um número N: "));

// for (let contador = 1; contador <= num; contador++) {

//     let ValorCalculado = num + contador;

//      let mensagem = `${num} + ${contador} = ${ValorCalculado}`;

//      console.log(mensagem);

// }

//////////////////////////////////////////////////

// Nível Intermediário***
// Atividade 1
// for (let contador = 1; contador <= 50; contador++){

//     if (contador % 2 == 0)

//         console.log(contador);

// } 

///////////////////////////////////////////////////////////

// Atividade 2
// let numeroAleatorio = Math.floor(Math.random() * 100);

// let chute = null;

// while (chute != numeroAleatorio) {

//     chute = parseInt(prompt("Chute um número:"));

//     if (chute != numeroAleatorio) {

//         if (chute > numeroAleatorio) {
    
//             alert("Chutou alto.");
    
//         } else {
    
//             alert("Chutou baixo.");
    
//         }

//     }

// }

//////////////////////////////////////////////////

// Atividade 3



//////////////////////////////////////////////////

// Nível Avançaco***
// Atividade 1


// Atividade 2


// alert("Você acertou!");

// Atividade 3

// Atividade 4

///////////////////////////////////////////////////
// for (let i = 1; i <= 5; i++) {
//     console.log(`Contagem: ${i}`);
//   }