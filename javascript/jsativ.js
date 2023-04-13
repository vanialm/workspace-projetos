//Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. 
let number = 100;
while(number < 110){
    number++;
    console.debug(number);
}

//Faça um script que leia três números inteiros e mostre o maior deles.
let num1 = 8;
let num2 = 16;
let num3 = 24;

if(num1 > num2 && num1 > num3){
    console.debug(`${num1} é maior`)
}else if(num2 > num1 || num2 > num3){
    console.log(`${num2} é maior`);
}else{
    console.log(`${num3} é maior`);
}

//Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles. 
if(num1 < num2 && num1 < num3){
    console.debug(`${num1} é menor`)
}else if(num2 < num1 || num2 > num3){
    console.log(`${num2} é menor`);
}else{
    console.log(`${num3} é menor`);
}

//Faça um algoritmo que possua as variáveis nome, cpf, idade, data_nascimento. Atribua valores a ela e mostre seus valores. 
let obj = {
    nome:              'Vania',
    cpf:               '121.132.444.72',
    idade:             47,
    data_nascimento:   "21/02/1976"
};
console.log(obj);

//Faça um algoritmo que tenha as variáveis nomeproduto, preco, estoque, validade. Atribua valores a elas e mostre na body. 
let nomeproduto = 'Disco de Vinyl';
let preco = 249.90;
let estoque = 100;
let validade = '31/12/2060';

document.body.innerHTML =`
<p>Nome do produto: ${nomeproduto}</p>
<p>Preço: R$ ${preco.toFixed(2)}</p>
<p>Estoque: ${estoque} unidades</p>
<p>Validade: ${validade}</p>`;

//Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo): 
let fahrenheit = 86;

let converteCelsius = (fahrenheit - 32) / 1.8;

console.log(`A temperatura em Celsius é ${converteCelsius}`);

//Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 
let valor = 4000;
let novoValor = 4400;

let reajuste = ((novoValor - valor)/novoValor)*100;
    console.log(`O percentual de reajuste é de ${reajuste.toFixed(2)}%`);

//O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2 
//Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com as informações abaixo:

let peso = 66;
let altura = 1.65;
let imc  = peso / (altura * altura);

if(imc > 18.5 && imc < 25){
    console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está no peso normal.`);
}else if(imc < 18.5){
    console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está abaixo do peso.`);
}else if(imc > 25 && imc < 30){
    console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está acima do peso.`);
}else{
    console.log(`Seu IMC é de ${imc.toFixed(2)}. Você é de uma pessoa obesa.`);
}