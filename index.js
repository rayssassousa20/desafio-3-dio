class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque(){
        let attack
        if(this.tipo == "mago"){
            attack = "magia"
        } else if (this.tipo == "guerreiro"){
            attack = "espada"
        } else if (this.tipo == "monge"){
            attack = "artes marciais"
        } else if (this.tipo == "ninja"){
            attack = "shuriken"
        }

        console.log(`o ${this.tipo} atacou usando ${attack}`)
    }
}


let displayHeroAttack = new hero("João", 22, "monge")

displayHeroAttack.ataque()