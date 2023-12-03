const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Bom dia!
const falar = pessoa.falar
falar() // undefined
//
//
const falarDePessoa = pessoa.falar.bind(pessoa) // bind amarra o this ao objeto pessoa
falarDePessoa() // Bom dia!
//

