const prompt = require("prompt-sync")();                               // adiciona o pacote ao programa 
const salario = Number(prompt("Salário R$: "));                          // lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): "));
const quadrienio = Math.floor(tempo / 4);                              // calcula quadriênios
const acrescimo = salario * quadrienio / 100;                          // ... e acréscimo  
console.log(`Quadriênios: ${quadrienio}`);                             // exibe as respostas
console.log(`Salário final R$: ${(salario+acrescimo).toFixed(2)}`);

