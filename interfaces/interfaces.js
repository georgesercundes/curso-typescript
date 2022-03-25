"use strict";
var Saudar;
(function (Saudar) {
    function ola(pessoa) {
        console.log('Olá ' + pessoa.nome);
    }
    Saudar.ola = ola;
})(Saudar || (Saudar = {}));
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + ' ' + sobrenome);
    }
};
Saudar.ola(pessoa);
mudarNome(pessoa);
Saudar.ola(pessoa);
// Saudar.ola({ nome: 'Jonas', idade: 27, altura: 1.75 })
pessoa.saudar('Skywalker');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Han';
Saudar.ola(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // Math.pow(base, exp)
    // base ** exp
    return Array(exp).fill(base).reduce((p, c) => p * c);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map