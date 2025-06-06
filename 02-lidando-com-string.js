'use strict';

const nome = "Sunoo";
const sobrenome = "Kim"
let idade = 21;
let pais = "South Korea";
let cidade = "Gyeonggi";

// CONCATENAÇÃO tradicional usa o operador +
// let mensagem1 = "Meu nome é "+nome+" "+sobrenome+", tenho "+idade+" anos e moro em "+pais+"/"+cidade+".";

let mensagem1 = "Meu nome é "+nome;
mensagem1 += " "+sobrenome+", tenho "+idade;
mensagem1 += " anos e moro em "+pais;
mensagem1 += "/"+cidade+".";

console.log(mensagem1);

// TEMPLATE STRING/LITERAL
let mensagem2 = `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e moro em ${pais}/${cidade}. Sou ${idade >= 18 ? 'maior' : 'menor'} de idade.`;

console.log(mensagem2);
