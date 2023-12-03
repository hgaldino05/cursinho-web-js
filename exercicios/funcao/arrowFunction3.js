let comparaThis = function (param) {
    console.log(this === param)
}

comparaThis(global) // true

const obj = {}
comparaThis = comparaThis.bind(obj)
comparaThis(global) // false
comparaThis(obj) // true

let comparaThisArrow = param => console.log(this === param)
comparaThisArrow(global) // false
comparaThisArrow(module.exports) // true

comparaThisArrow = comparaThisArrow.bind(obj)
comparaThisArrow(obj) // false
comparaThisArrow(module.exports) // true

// this em uma função arrow é um this associado ao contexto no qual a função foi escrita
// this em uma função normal é um this associado ao contexto no qual a função foi chamada
// this em uma função normal pode variar de acordo com a chamada
// this em uma função arrow não varia de acordo com a chamada
// this em uma função normal pode ser alterado com o bind
// this em uma função arrow não pode ser alterado com o bind
// this em uma função normal pode ser alterado com o call
// this em uma função arrow não pode ser alterado com o call
// this em uma função normal pode ser alterado com o apply
// this em uma função arrow não pode ser alterado com o apply
// this em uma função normal pode ser alterado com o operador new
// this em uma função arrow não pode ser alterado com o operador new

// Path: exercicios\funcao\arrowFunction4.js