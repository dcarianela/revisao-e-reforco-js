'use strict';

// Importação de recurso padrão (default)
import alunos from './modulos-esm/alunos.js';

// Importação de múltiplos recursos/módulos usando ESM
import { saudacao, clientes, separador } from './modulos-esm/exemplos.js';

// Uso de um "alias"
import { pessoa, livro, alunos as personagens } from './modulos-esm/dados.js';

import { converterMaiusculo, converterMinusculo, formatarValor } from './modulos-esm/funcoes.js';

saudacao("Jaehyun");
console.log(clientes);

separador();

// Acessando recursos do import de alunos
console.log(alunos[1]);
console.log(alunos);

for(const aluno of alunos){
    console.log(aluno);
}

separador();

// Acessando recursos do módulo 'dados.js'
console.log(pessoa.nome);
console.log(livro);
console.log(personagens); // lembre-se: personagens é um apelido para alunos

separador();

/* Exercícios */

/* No arquivo 05, importe e utilize estas funções passando textos e valores para testes. */
console.log(converterMaiusculo("ni-ki"));
console.log(converterMinusculo("SUNOO"));
console.log(formatarValor(5577.00));


//import * as klaibert from './modulos-esm/funcoes.js';
//console.log(klaibert.converterMaiusculo("ni-ki"));