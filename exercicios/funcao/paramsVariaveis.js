function soma () {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 55
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, '10')) // 5510
console.log(soma('a', 'b', 'c')) // 0abc
console.log(soma(1.1, 2.2, 3.3)) // 6.6
console.log(soma(1.1, 2.2, 'Teste')) // 3.3Teste
console.log(soma('a', 'b', 'c', 1.1, 2.2, 3.3)) // 0abc1.12.23.3

console.log(soma('Henrique',' ','Galdino'))