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
