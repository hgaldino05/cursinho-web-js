const nome = 'Henrique';
const concatenacao = 'Olá ' + nome + '!';

// Template String
const template = `
    Olá
    ${nome}!`;

console.log(concatenacao, template);

// expressões...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);

const low = texto => texto.toLowerCase();
console.log ('Ei... ' + low('FALA BAIXO') + ' NENGUE!');
// Dica: Utilize sempre template string para concatenar strings, pois é mais legível e prático.