'use strict';

/* Sobre o operador rest ...
Usamos o rest para mesclar uma relação de parâmetros/argumentos para uma função. */
function somar(...valores){
    // Variável acumuladora
    let total = 0;

    // Iteração para somar e guardar o total
    for(const valor of valores){
        total += valor;
    }

    return total;
}

let resultado1 = somar(10, 20);
let resultado2 = somar(10, 20, 50);

console.log(resultado1, resultado2);
