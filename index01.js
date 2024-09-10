// arrays, objetos

let metas = ["Miquéias", "36 anos."]
console.log(metas[0] + ", " + metas[1])

let meta = {
    value: 'Ler um livro por mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}
meta.value = "não é mais ler um livro"
meta.log(meta.value)     

// function // arrow function Ex: abaixo
let criarMeta =  () => {}