"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/* reduce (reduzir, redução, chegar a um resultado único)
Passa por elementos de um array e reduz a um único valor, que pode ser uma soma, média, concatenação, etc.

A função callback recebe dois parâmetros: o acumulador (valor que é acumulado até o momento), e o valor atual (elemento do array sendo processado). */

// Exemplo 1
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(total);

separador();

// Exercício 1: realize a soma dos preços de todos os cursos
const precoCursos = cursos.reduce(
  (acumulador, { preco }) => acumulador + preco,
  0
);
console.log("Soma de todos os preços: " + precoCursos.toFixed(2));

separador();

// Exercício 2: calcule a média dos preços de todos os cursos
const mediaCursos = cursos.reduce((acumulador, { preco }) => {
  return acumulador + preco / cursos.length;
}, 0);
console.log("Média dos preços: " + mediaCursos.toFixed(2));

separador();

// Exercício 3: calcule o preço total dos cursos de Front-End
const precoFrontEnd = cursos
  .filter(({ categoria }) => categoria === "Front-End")
  .reduce((acumulador, { preco }) => acumulador + preco, 0);
console.log("Soma dos preços dos cursos de Front: " + precoFrontEnd.toFixed(2));
