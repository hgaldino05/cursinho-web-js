// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // 5
imprimirSoma(2) // NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // 12

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) // 5
console.log(soma(2)) // 3
console.log(soma()) // NaN

//PARTE 2

// Armazenando uma funcao em uma variavel
const imprimindoSoma = function (a, b) {
    console.log(a + b)
}

imprimindoSoma(2, 3) // 5


// Armazenando uma funcao arrow em uma variavel
const novaSoma = (a, b) => {
    return a + b
}

console.log(novaSoma(2, 3)) // 5

// Retorno implicito

const subtracao = (a, b) => a - b

console.log(subtracao(2, 3)) // -1