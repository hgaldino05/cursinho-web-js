{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()

// console.log(local) // Não é possível acessar a variável local fora do escopo da função

//PARTE 2

// Variáveis declaradas com var tem escopo global e de função
// Variáveis declaradas com let tem escopo global, de função e de bloco

var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)
