const peso1 = 1.0;
const peso2= Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;

const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed(2) will show only two decimal places
console.log(media.toString()); // toString() will show the number as a string
console.log(media.toString(2)); // toString(2) will show the number as a binary
console.log(typeof media); // typeof will show the type of the variable
console.log(typeof Number); // typeof will show the type of the variable
