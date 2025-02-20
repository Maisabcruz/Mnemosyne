                                                    // Atividades com filter***
//Exercicio básico 1
// const numeros = [5, 8, 12, 15, 3, 20, 7];
// const maioresQueDez = numeros.filter(numero => numero > 10);
// console.log(maioresQueDez); // Deve retornar [12, 15, 20]

//////

//Exercicio básico2
// const nomes = ["Ana", "João", "Amanda", "Carlos", "Arthur", "Beatriz"];
// const nomesComA = nomes.filter(nome => nome.startsWith("A"));
// console.log(nomesComA); // Deve retornar ["Ana", "Amanda", "Arthur"]
// Documentação do startsWith em https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

//////
//Exercicio Intermediario 1
// const produtos = [
//     { nome: "Teclado", preco: 120 },
//     { nome: "Mouse", preco: 40 },
//     { nome: "Fone de ouvido", preco: 80 },
//     { nome: "Caderno", preco: 30 },
// ];

// const produtosBaratos = produtos.filter(produto => produto.preco < 50);
// console.log(produtosBaratos);

//////
//Exercicio Intermediario 2 (terminar e testar)
// const produtos = [
//     { nome: "Teclado", preco: 120 },
//     { nome: "Mouse", preco: 40 },
//     { nome: "Fone de ouvido", preco: 80 },
//     { nome: "Caderno", preco: 30 }
//   ];
//   const produtosBaratos = // Use filter aqui
//   console.log(produtosBaratos); // Deve retornar [{ nome: "Mouse", preco: 40 }, { nome: "Caderno", preco: 30 }]
  
//Exercicio Intermediario 3 (terminar e testar)
// const pessoas = [
//     { nome: "Carlos", idade: 17 },
//     { nome: "Mariana", idade: 22 },
//     { nome: "João", idade: 15 },
//     { nome: "Fernanda", idade: 30 }
//   ];
//   const maioresDeIdade = // Use filter aqui
//   console.log(maioresDeIdade); // Deve retornar [{ nome: "Mariana", idade: 22 }, { nome: "Fernanda", idade: 30 }]  

//////

//Exercicio avançado 1 (terminar e testar)
// const usuarios = [
//     { nome: "Ana", ativo: true },
//     { nome: "Carlos", ativo: false },
//     { nome: "Beatriz", ativo: true },
//     { nome: "João", ativo: false }
//   ];
//   const usuariosAtivos = // Use filter aqui
//   console.log(usuariosAtivos); // Deve retornar [{ nome: "Ana", ativo: true }, { nome: "Beatriz", ativo: true }]  

//Exercicio avançado 2 (terminar e testar)
// const pedidos = [
//     { id: 1, status: "pendente" },
//     { id: 2, status: "entregue" },
//     { id: 3, status: "cancelado" },
//     { id: 4, status: "entregue" }
//   ];
//   const pedidosEntregues = // Use filter aqui
//   console.log(pedidosEntregues); // Deve retornar [{ id: 2, status: "entregue" }, { id: 4, status: "entregue" }]  

//Exercicio avançado 3 (terminar e testar)
// const alunos = [
//     { nome: "Paula", nota: 8 },
//     { nome: "Miguel", nota: 5 },
//     { nome: "Camila", nota: 9 },
//     { nome: "Lucas", nota: 6 }
//   ];
//   const alunosAprovados = // Use filter aqui
//   console.log(alunosAprovados); // Deve retornar [{ nome: "Paula", nota: 8 }, { nome: "Camila", nota: 9 }]

//////////////////////////////////////////////
                                                    // Atividades com find***
//Exercicio básico 1
// const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
// const amanda = nomes.find(nome => nome == "Amanda");
// console.log(amanda); // Deve retornar "Amanda"

//////

//Exercicio básico2
// const listaDeUsuarios = [
//     { id: 1, nome: "Alice" },
//     { id: 2, nome: "Bruno" },
//     { id: 3, nome: "Carla" }
//   ];
  
//   const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
  
//   console.log(usuarioEncontrado); 
//   // Deve retornar { id: 2, nome: "Bruno" }  

//////

//Exercicio Intermediario 1
// const produtos = [
//     { nome: "Teclado", preco: 120 },
//     { nome: "Mouse", preco: 40 },
//     { nome: "Fone de ouvido", preco: 80 },
//     { nome: "Caderno", preco: 30 }
//   ];
//   const produtoBuscado = // Use find aqui
//   console.log(produtoBarato); // Deve retornar { nome: "Fone de ouvido", preco: 80 }  

//////

//Exercicio Intermediario 2
// const pessoas = [
//     { nome: "Carlos", idade: 17 },
//     { nome: "Mariana", idade: 22 },
//     { nome: "João", idade: 15 },
//     { nome: "Fernanda", idade: 30 }
//   ];
//   const maiorDeIdade = // Use find aqui
//   console.log(maiorDeIdade); // Deve retornar { nome: "Mariana", idade: 22 }  

//////

//Exercicio Intermediario 3
// const palavras = ["sol", "mar", "montanha", "rio", "lua", "nuvem"];
// const palavraLonga = // Use find aqui
// console.log(palavraLonga); // Deve retornar "montanha"

//////

//Exercicio avançado 1
// const usuarios = [
//     { nome: "Carlos", ativo: false },
//     { nome: "Ana", ativo: true },
//     { nome: "Beatriz", ativo: false},
//     { nome: "João", ativo: false }
//   ];
//   const usuarioAtivo = // Use find aqui
//   console.log(usuarioAtivo); // Deve retornar { nome: "Ana", ativo: true }  

//////

//Exercicio avançado 2
// const pedidos = [
//     { id: 1, status: "pendente" },
//     { id: 2, status: "entregue" },
//     { id: 3, status: "cancelado" },
//     { id: 4, status: "cancelado" }
//   ];
//   const pedidoEntregue = // Use find aqui
//   console.log(pedidoEntregue); // Deve retornar { id: 2, status: "entregue" }  

//////

//Exercicio avançado 3
// const alunos = [
//     { nome: "Miguel", nota: 5 },
//     { nome: "Paula", nota: 8 },
//     { nome: "Camila", nota: 9 },
//     { nome: "Lucas", nota: 6 }
//   ];
//   const alunoAprovado = // Use find aqui
//   console.log(alunoAprovado); // Deve retornar { nome: "Paula", nota: 8 }
  
//////////////////////////////////////////////
                                                    // Atividades com Map***
//Exercicio básico 1
// const palavras = ["olá", "mundo", "javascript"];
// const enfatizadas = palavras.map(palavra => palavra + "!!!");
// console.log(enfatizadas);

//////

//Exercicio básico2
// const nomes = ["ana", "bruno", "carla"];
// const nomesMaiusculos = nomes.map(nome => "Colaborador: " + nome);
// console.log(nomesMaiusculos);

//////

//Exercicio Intermediario 1
// const pessoas = [
//     { nome: "João", idade: 25 },
//     { nome: "Maria", idade: 30 },
//     { nome: "Carlos", idade: 28 }
//   ];
//   const nomes = pessoas.map(pessoa => pessoa.nome);
//   console.log(nomes);
  

//////

//Exercicio Intermediario 2
// const raios = [3, 5, 7];
// const areas = raios.map(raio => Math.PI * Math.pow(raio, 2));
// console.log(areas);

//////

//Exercicio Intermediario 3
// const precos = [10, 25.5, 3.99, 7];
// const precosFormatados = precos.map(preco => `R$ ${preco.toFixed(2).replace('.', ',')}`);
// console.log(precosFormatados);

//////

//Exercicio avançado 1
// const notas = [95, 82, 74, 63, 49];
// const conceitos = notas.map(nota => {
//   if (nota >= 90) return "A";
//   if (nota >= 80) return "B";
//   if (nota >= 70) return "C";
//   if (nota >= 60) return "D";
//   return "F";
// });
// console.log(conceitos);

//////

//Exercicio avançado 2
// const titulos = ["Aprenda JavaScript", "Método Map em JS", "Dicas de Programação"];
// const slugs = titulos.map(titulo => titulo.toLowerCase().replace(/\s+/g, "-"));
// console.log(slugs);

//////

//Exercicio avançado 3
// const produtos = [
//     { id: 1, nome: "Celular", preco: 1999.99 },
//     { id: 2, nome: "Notebook", preco: 3999.99 },
//     { id: 3, nome: "Tablet", preco: 899.99 }
//   ];
//   const catalogo = produtos.map(produto => ({
//     nome: produto.nome,
//     precoFormatado: `R$ ${produto.preco.toFixed(2).replace('.', ',')}`
//   }));
//   console.log(catalogo);

//////