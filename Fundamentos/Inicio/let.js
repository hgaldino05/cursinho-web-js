// Variáveis declaradas com var tem escopo global e de função
// Variáveis declaradas com let tem escopo global, de função e de bloco
let numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)