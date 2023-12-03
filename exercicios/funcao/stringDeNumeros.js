//comparação entre strings de números

const cadeia_de_strings = '1,2,3,4,5,6,7,8,9'

'1' >'2' // false
'1' > '1' // false
'2' > '1' // true
'4' > '2' // true

//apos o nove, a comparação passa a considerar tudo true exemplo:
'5' > '42' //true

//com isso, podemos ver que comparar números em formato de string não é uma boa escolha.
