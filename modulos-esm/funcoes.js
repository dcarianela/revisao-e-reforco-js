'use strict';

/* Exercícios */

/* 1) Crie um arquivo chamado "funcoes.js" dentro da pasta "modulos-esm" */

/* 2) Dentro dele, programe 3 funções (USANDO ARROW FUNCTION):
    - Converter caracteres para MAIÚSCULO 
    - Converter caracteres para MINÚSCULO
    - Formatar valor em moeda brasileira (real) */

const converterMaiusculo = texto => texto.toUpperCase();
const converterMinusculo = texto => texto.toLowerCase();
const formatarValor = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

/* 3) Exporte-as como módulos */
// export { converterMaiusculo, converterMinusculo, formatarValor };

export function classificar(...texto){
    return texto.sort();
}

console.log( classificar("Goiaba", "Abacaxi", "Uva", "Mexerica"));
console.log(
    classificar(
        "txt", "bts", "enha", "njz"
    )
);
