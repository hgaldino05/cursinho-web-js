function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // função dentro do objeto
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco()) // R$ 18
console.log(produto.getPreco()) // R$ 3900.65

const carro = { preco: 49990, desc: 0.20 }

// Call e Apply
// A diferença entre eles é a forma como passamos os parâmetros
// Call: passamos os parâmetros diretamente na função
// Apply: passamos os parâmetros dentro de um array
console.log(getPreco.call(carro)) // R$ 39992
console.log(getPreco.apply(carro)) // R$ 39992

console.log(getPreco.call(carro, 0.17, '$')) // $ 46790.64
console.log(getPreco.apply(carro, [0.17, '$'])) // $ 46790.64

console.log(getPreco.call(produto)) // R$ 3900.65
console.log(getPreco.apply(produto)) // R$ 3900.65
