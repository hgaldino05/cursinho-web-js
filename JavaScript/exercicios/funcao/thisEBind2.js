function Pessoa (){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1)
}

new Pessoa

// Path: exercicios\funcao\thisEBind3.js