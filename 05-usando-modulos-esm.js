'use strict';

// Importação de recurso padrão (default)
import alunos from './modulos-esm/alunos.js';

// Importação de múltiplos recursos/módulos usando ESM
import { saudacao, clientes, separador } from './modulos-esm/exemplos.js';

// Uso de um "alias"
import { pessoa, livro, alunos as personagens } from './modulos-esm/dados.js';

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



