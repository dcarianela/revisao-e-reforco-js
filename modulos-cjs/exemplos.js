'use strict';

function minhaFuncao(){
    console.log("Olá! Função criada em um módulo");
}

const clientes = ['Sunoo', 'Jake', 'Sunghoon'];

/* CJS: CommonJS */
module.exports = { minhaFuncao, clientes };