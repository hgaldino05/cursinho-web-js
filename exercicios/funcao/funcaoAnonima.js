const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { // operacao = soma é um parametro padrão
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, soma) // 7
imprimirResultado(3, 4, function (x, y) { // 7
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) // 12

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar() // Opa
