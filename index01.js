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

const { select, input, checkbox } = require("@inquirer/prompts");

let meta = {
  value: "Tomar 3L de água por dia",
  checked: false,
};
let metas = [meta];

const cadastrarMeta = async () => {
  const meta = await input({ message: "Digite a meta:" });

  if (meta.length == 0) {
    console.log("A meta não pode ser vazia.");
    return;
  }

  metas.push({ value: meta, checked: false });
};

const listarMetas = async () => {
  const respostas = await checkbox({
    message:
      "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
    choices: [...metas],
    instructions: false,
  });

  metas.forEach((m) => {
    m.checked = false;
  });

  if (respostas.length == 0) {
    console.log("Nenhuma meta selecionada!!");
    return;
  }

  respostas.forEach((respostas) => {
    const meta = metas.find((m) => {
      return m.value == respostas;
    });

    meta.checked = true;
  });

  console.log("Meta(s) marcadas com concluída(s)");
};

const metasRealizadas = async () => {
  const realizadas = metas.filter((meta) => {
    return meta.checked;
  });

  if (realizadas.length == 0) {
    console.log("Não existem metas realizadas! :(");
    return;
  }

  await select({
    message: "Total de metas realizadas, " + realizadas.length,
    choices: [...realizadas],
  });
};

const metasAbertas = async () => {
  const abertas = metas.filter((meta) => {
    return meta.checked != true;
  });

  if (abertas.length == 0) {
    console.log("Não existem metas abertas! :).");
    return;
  }

  
  await select({
    message: "Total de metas abertas, "  + abertas.length,
    choices: [...abertas],
  });
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
          name: "Metas realizadas",
          value: "realizadas",
        },
        {
          name: "Metas abertas",
          value: "abertas",
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
        console.log(metas);
        break;
      case "listar":
        await listarMetas();
        break;
      case "realizadas":
        await metasRealizadas();
        break;
      case "abertas":
        await metasAbertas();
        break;
      case "sair":
        console.log("Até a próxima!!!");
        return;
    }
  }
};

start();
