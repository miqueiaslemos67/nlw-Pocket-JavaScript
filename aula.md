## Linguagem de programação

Maneira de dar instrução ao computador.
Como um lego, você irá utilizar peças para criar algoritmos, ou seja, para resolver problemas.

> **Algoritmos**: Sequência de passos lógicos e finita para resolução de um problema.

## Peças de uma linguagem

[x] - Comentários
[] - Declarações de variáveis (const, let)
[] - Operadores (atribuição, concatenação, matemáticos, lógicos)
[] - Tipos de dados (string, Number, boolean)
[] - Estrutura de dados (functions, object, array)
[] - Controle de fluxo (if/else)
[] - Estrutura de repetição (for, while)

## Fases da resolução de um problema

- Coletar os dados
- Processar os dados (manipular, alterar....)
- Apresentar os dados

## Escopo e variáveis

- [x] Variáveis globais e locais - Obs: Variáveis é uma 'caixinha', onde eu irei guardar uma informação para usar mas tarde. - A informação da variável pode ser qual tipo de dado Ex: strings, Numbers, boolens, function...

- [x] Constantes

## Tipos de dados:

- [x] Strings (textos): Podem ser escritos com aspas duplas (" "), aspas simples ('') e crase (``).
- [x] Number: são numeros: 1, 2, 2.5....
- [x] Boolean: só pode ser true ou false / verdadeiro ou falso.

## Operadores

- [x] Operadores de atribuição de valor Ex: =
  - Esse sinal de igual na programação tem a função de atribuir algo. - EX: let = "Hello, world!!" Aqui nesse exempplo o sinal de igual (=) está recebendo a mensagem "Hello, world!!"

-> const mensagem = "Olá, Miquéias!"

{
const mensagem = "Olá, Lemos!!
}
console.log(mensagem)

OBS: Nesse exemplo a mensagem no console.log, irá aprecer "Olá, Miquéias", por está fora das {} ele se torna global. Já a variável const que está entre {} está em outro escopo(caixa), ela se torna local!

< # ---------------------------------------------------------------------------------------------------------------------------------------------------------------- # >

- [x] Operadores de concatenação + : Junção de duas ou mais strings
      Ex: let metas = ["Miquéias", "36 anos."]
      console.log(metas[0] + ", " + metas[1])
      Res: Miquéias, 36 anos.

- [x] Operadores de concatenação +
- [x] Operadores de comparação: == != <= >= < >
- [x] Spread operator: ... Ex: choices: [...realizadas]

## Estrutura de dados:

## Arrays:

- [x] Uma lista que contém qualquer tipo de dado
- [x] Método de array: push, [find, forEach, filter, map]: HOF (Higher Order Functions)
      * Método é toda função que está dentro de um objeto.

## Objetos:

- [x] Atributos e métodos
- [x] Criação e manipulação de objetos
- [x] Acesso a propriedades de objetos // Sempre que eu usar o ponto(.), estarei acessando uma algo dertro/propriedade dentro

## Functions

- [x] criar, passar argumento
- [x] executar
- [x] arrow function / named function

## Estrutura de reptição

- [x] while
      OBS: Temos que ter cuidado por no while sempre sera veradeiro, sendo necessário usar o (return), para parar o looping.
      const start = () => {
      let count = 1;
      while (count <= 10) {
      console.log(count);
      count++;
      }
      };
      start();

## Condicionais

- [x] switch
      const start = () => {
            while (true) {
             let opcao = "sair";
                     switch (opcao) {
                        case "cadastrar":
                        console.log("Vamos cadastrar");
                        break;
                        case "listar":
                        console.log("Vamos listar");
                        break;
                        case "sair":
                     return;
           }
        }
      };

    start();

- [x] if/else


## Módulos em Node.js:

    OBS: A ideia aqui é usar da biblioteca já criada com códigos, funções, importadas através
    da instalação no terminal do (npm install inquirer).. criando caixa de perguntas/interações para
    o usuário. no caso se importarmos o valor "select" seleção.

- [x] Importação de módulos (require, CommonJS)
- [x] Biblioteca 'inquirer' para criar prompts interativos

## async || awai : Programação assíncrona e Promises || OBS: Sempre que eu for usar uma função async("assíncrona") eu coloco na frente do uso dela  um await..

Em JavaScript, o termo async refere-se a funções assíncronas, que permitem que você escreva código que
lida com operações assíncronas de forma mais legível e direta, sem recorrer a estruturas mais complexas
como callbacks ou a encadeamento de Promises.

A palavra-chave async é usada para declarar uma função assíncrona. Quando uma função é marcada como async,
ela automaticamente retorna uma Promise, e dentro dela, você pode usar a palavra-chave await para "esperar"
a resolução de uma Promise antes de prosseguir para a próxima linha de código.

## - 'await espera o usuário interagir com o sistema'
Principais pontos:
async transforma a função em uma função assíncrona que retorna uma Promise.
await é usado dentro de funções async para pausar a execução até que a Promise seja resolvida ou rejeitada.
Se a Promise for resolvida, o valor de retorno é atribuído à variável à qual o await foi aplicado.
Se a Promise for rejeitada, você pode capturar o erro com um bloco try...catch.
Isso facilita o tratamento de operações assíncronas (como chamadas a APIs) de forma mais linear e fácil de entender.

Essa função "select" está esperando um objeto que tem as chaves || propriedades
const opcao = await select({
mensage: "Menu >",
choices: []
})

## Definição de choices:

Em JavaScript, choices normalmente se refere a uma coleção ou um array de opções
que podem ser escolhidas pelo usuário ou manipuladas em um contexto específico,
como um formulário ou menu de seleção. O termo pode variar conforme o contexto
em que está sendo utilizado.

let choices = ['Opção 1', 'Opção 2', 'Opção 3'];

console.log(choices); // ['Opção 1', 'Opção 2', 'Opção 3']

## Deinição de message:
Resumo:
message pode ser uma propriedade genérica dentro de um objeto, representando uma mensagem qualquer.
Em contextos de erros, message é a descrição associada ao erro.
Em eventos como Web Workers ou mensagens entre janelas, message transporta os dados entre contextos.
Esses são alguns exemplos de como a propriedade message é usada em JavaScript.

# Código com funções, objetos, com if/else, variaveis, constantes, propriedades novas abaixo:
const { select, input } = require("@inquirer/prompts");

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}
let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:" });

    if(meta.length == 0) {
        console.log('A meta não pode ser vazia.')
        return
    }

    metas.push(
        {value: meta, checked: false}
    )
};

const start = async () => {

  while (true) {
    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "cadastrar",
        },
        {
          name: "Vamos listar",
          value: "listar",
        },
        {
          name: "Sair",
          value: "sair",
        },
      ],
    });

    switch (opcao) {
      case "cadastrar":
       await cadastrarMeta();
       console.log(metas)
        break;
      case "listar":
        console.log("Vamos listar");
        break;
      case "sair":
        console.log("Até a próxima!!!");
        return;
    }
  }
};

start();


## Apenas exemplos de aplicações

// arrays, objetos

// let metas = ["Miquéias", "36 anos."]
// console.log(metas[0] + ", " + metas[1])

// let meta = {
//     value: 'Ler um livro por mês',
//     checked: true,
// }
// meta.value = "não é mais ler um livro"
// meta.log(meta.value)
// console.log(metas[0] + " ," + metas[1])

// function // arrow function Ex: abaixo

//let criarMeta =  () => {}

// let metas = ["Miquéias", "36 anos."]
// console.log(metas[0] + ", " + metas[1])

// let meta = {
//     value: 'Ler um livro por mês',
//     checked: true,
// }

// let metas = [
//     meta,
//     {
//         value: "Academia 5 vezes por semana.",
//         checked: false,
//     }
// ]
// console.log(metas[1].value)

// ----------------------------------------------------------//

// const start = () => {
//   let count = 1;
//   while (count <= 10) {
//     console.log(count);
//     count++;
//   }
// };
// start();

// --------------------------------------------------------//