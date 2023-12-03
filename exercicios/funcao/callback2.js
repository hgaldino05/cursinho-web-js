const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log('Sem callback: ', notasBaixas)

// Com callback
notasBaixas = notas.filter(function (nota) {
    return nota < 7
}
)
console.log('Com callback: ', notasBaixas)

// Com callback e arrow function

const notasBaixas2 = notas.filter(nota => nota < 7)
console.log('Com callback e arrow function: ', notasBaixas2)

// Com callback e arrow function e função externa

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log('Com callback e arrow function e função externa: ', notasBaixas3)


