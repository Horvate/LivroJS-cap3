// adiciona o pacote ao programa
const prompt = require("prompt-sync")();  
// lê dados de entrada              
const pesoKg = Number(prompt("Peso da Ração(kg): "));       
const consumo = Number(prompt("Consumo Diário (gr): "));
// cálculo da respostas
const pesoGr = pesoKg * 1000;                               
const duracao = Math.floor(pesoGr / consumo);
const sobra = pesoGr % consumo;
// dados de saída
console.log(`Duração: ${duracao} dias`);             
console.log(`Sobra: ${sobra}gr`);             