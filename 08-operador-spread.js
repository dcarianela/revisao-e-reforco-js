'use strict';

import { classificar } from './modulos-esm/funcoes.js';
import { separador } from './modulos-esm/exemplos.js';

/* Sobre o operador spread ...
Usamos o spread para "espalhar" dados de arrays e objetos, o que pode ser útil na chamada de funções e também na mesclagem destas estruturas. */

// Spread em arrays
const bandas = ["The Marias", "Nirvana", "Cocteau Twins"];
const maisBandas = ["Paramore", "Beastie Boys", "Oasis", "Maneskin", ...bandas];

console.log(bandas);
console.log(maisBandas);

separador();

// Spread para "espalhar" parâmetros para uma função
console.log( classificar(...maisBandas) );

