// Exercício 1 - Classe

class Moto {
    public velocidade: number = 0

    constructor(public nome: string) {

    }

    public buzinar() {
        console.log('Toooooooooot!')
    }

    public acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança

abstract class Objeto2D {
    constructor(public base = 0, public altura = 0) {

    }

    public abstract area(): number
}

class Retangulo extends Objeto2D {

    public area() {
        return this.base * this.altura
    }
}
const retangulo = new Retangulo(5, 7)
console.log(retangulo.area())

// Exercício 3 - Getters & Setters

class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome() {
        return this._primeiroNome
    }

    set primeiroNome(valor: string) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        }
    }
}

const estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
