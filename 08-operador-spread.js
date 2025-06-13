"use strict";

import { classificar } from "./modulos-esm/funcoes.js";
import { separador } from "./modulos-esm/exemplos.js";

/* Sobre o operador spread ...
Usamos o spread para "espalhar" dados de arrays e objetos, o que pode ser útil na chamada de funções e também na mesclagem destas estruturas. */

// Spread em arrays
const bandas = ["The Marias", "Nirvana", "Cocteau Twins"];
const maisBandas = ["Paramore", "Beastie Boys", "Oasis", "Maneskin", ...bandas];

console.log(bandas);
console.log(maisBandas);

separador();

// Spread para "espalhar" parâmetros para uma função
console.log(classificar(...maisBandas));

separador();

// Spread em objetos
const cliente = {
  nome: "Sunoo",
  pais: "South Korean",
  idade: 21,
};

const compra = {
  ...cliente, // copiando as propriedades de cliente para compra
  codigoPedido: "123xyz",
  produtos: ["Maquiagem", "Doramas", "Vitaminas"],
  total: 12345.66,
};

console.log(compra);

console.log(
  `O cliente ${compra.nome} fez uma compra no valor de ${compra.total}`
);
