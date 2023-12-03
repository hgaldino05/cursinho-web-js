const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // Global

// Contexto léxico é o local onde a variável foi definida fisicamente no código
// A função carrega consigo o contexto léxico onde ela foi definida mesmo que seja chamada em outro local
