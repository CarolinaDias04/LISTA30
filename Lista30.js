// 1- PRIMEIRAS DECISÕES (01 A 10)
// Maior de idade 
let idade = 17;
if(idade >= 18){
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}
// NÚMERO POSITIVO, NEGATIVO OU ZERO
let numero = -8;
if(numero > 0){
    console.log("O número é positivo!")
} else {
    console.log("O número é negativo!")
}
// PAR OU ÍMPAR
let numeroDois = 23;
if(numeroDois % 2 == 0){
    console.log("O número é par!")
} else {
    console.log("O número é ímpar!")
}
// MAIOR ENTRE DOIS NÚMEROS
let numeroTres = 35;
let numeroQuatro = 42;
if(numeroTres > numeroQuatro){
    console.log("O primeiro número é maior!")
} else {
    console.log("O segundo número é maior!")
}
// ENTRADA EM EVENTO
let idade2 = 20;
let ingressoValido = true;
if(idade2 >= 18 && ingressoValido){
    console.log("Entrada liberada!")
} else {
    console.log("Entrada negada!")
}
// DESCONTO VIP
let valorCompra = 150;
let clienteVIP = true;
if(valorCompra >= 200 ){
    console.log("Desconto de 20% aplicado!");
} else {
    console.log("Desconto não aplicado!");
}
// FAIXA DE TEMPERATURA
let temperatura = 85;
if(temperatura < 40){
    console.log("Temperatura baixa!");
} else if(temperatura >= 40 && temperatura <= 80){
    console.log("Normal!");
} else {
    console.log("Superaquecimento!");
}
// APROVAÇÃO ESCOLAR
let nota = 8;
let frequencia = 80;
if(nota >= 7 && frequencia >= 75){
    console.log(" Aprovado!");
} else {
    console.log(" Reprovado!");
}
// CLASSIFICAÇÃO POR IDADES
let idade3 = 17;
if(idade3 < 0){
    console.log("Idade inválida!");
} else if (idade3 <= 12){
    console.log("Criança!");
} else if (idade3 <= 17){
    console.log("Adolescente");
} else if (idade3 <=59){
    console.log("Adulto");
} else {
    console.log("Idoso");
}
// ACESSO AO LABORÁTORIO
let horario = 19;
let atorizado = true;
if(horario >=8 && horario <= 18 ){
    console.log("Acesso Liberado!");
} else{
    console.log("Acesso Negado!");
}
// 2- COMBINANDO REGRAS (11 A 20)
// EMPRESTIMO BANCÁRIO
let renda = 4500;
let possuiRestrição = false;
if(renda >= 3000 && !possuiRestrição){
    console.log("Empréstimo aprovado!");
} else {
    console.log("Empréstimo negado!");
}
// FRETE GRÁTIS(tirar dúvida)
let totalCompra = 180;
let cupomFrete = true;
let frete = 25;
if(totalCompra >=200 || cumpomFrete == true){
    console.log("Frete grátis nas contas");
}
// NÍVEL DO JOGADOR
let pontos = 750;
if(pontos < 100){
    console.log("Iniciante");
} else if (pontos >= 100 && pontos <= 499){
    console.log("Bronze");
} else if (pontos >= 500 && pontos <= 999){
    console.log("Prata");
} else {
    console.log("Ouro");
}
// SENHA E USUÁRIO
let usario = "aluno";
let senha = "senai123";
if(usario == "aluno" && senha == "senai123"){
    console.log("Acesso Liberado!");
}
// SEMÁFORO
let cor = "amarelo";
if(cor == "verde"){
    console.log("Siga!");
} else if (cor == "amarelo"){
    console.log("Atenção");
} else if (cor == "vermelho"){
    console.log("Pare");
} else{
    console.log("Cor inválida!");
}
// DIA ÚTIL OU FIM DE SEMANA
let dia = 6;
if(dia >= 1 && dia <= 5){
    console.log("Dia útil");
}else {
    console.log("Fim de semana");
}
// PODE DIRIGIR?
let idade4 = 22;
let possuiCNH = false;
if(idade4 >= 18 && possuiCNH == true){
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}
// ESTOQUE DE PRODUTO
let estoque = 4;
let quantidadePedida = 6;
if(quantidadePedida <= 0) {
    console.log("Quantidade inválida!");
} else if (quantidadePedida <= estoque) {
    console.log("Venda autorizada!");
} else {
    console.log("Venda não autorizada!");
}
// BOLETIM COM RECUPERAÇÃO
let nota2 = 5.8;
let frequencia2 = 82;
if(frquencia2 < 75){
    console.log("Reprovado por frequência!");
} else if (nota2 >= 5 && nota2 <7){
    console.log("Recuperação!");
} else if (nota2 < 5){
    console.log("Reprovado por nota!");
}
// DESCONTO POR FAIXA
let valorCompra2  = 380;
if(valorCompra2 <=100){
    console.log("Sem desconto!");
} else if (valorCompra2 > 100 && valorCompra2 <= 300){
    console.log("Desconto de 5% aplicado!");
} else if (valorCompra2 > 300 && valorCompra2 <= 500){
    console.log("Desconto de 10 % aplicado!");
} else if (valorCompra2 >= 500){
    console.log("Desconto de 15% aplicado!");
}
// 3- DESAFIOS COM VÁRIAS CONDIÇÕES (21 A 30)
// TRIÂNGULO VÁLIDO(tirar dúvida)
let ladoA = 3;
let ladoB = 4;
let ladoC = 5;
if(ladoA > 0 && ladoB > 0 && ladoC > 0 && ladoA+ladoB === ladoC){
    console.log("");
}
// TIPO DE TRIÂNGULO(tirar dúvida)
let ladoA1 = 6;
let ladoB1 = 6;
let ladoC1 = 4;

// CALCÚLO DE IMC 
let peso = 72;
let altura = 1.75;
let imc = peso / (altura * altura);
if(imc < 18.5){
    console.log("Abaixo do peso!");
} else if (imc >= 18.5 && imc < 25){
    console.log("Normlal");
} else if (imac >= 25 && imc < 30){
    console.log("Sobrepeso");
} else if (imc >= 30){
    console.log("Obesidade");
}
// TARIFA DE ESTACIONAMENTO(tirar dúvida)
let horas = 5;
let clienteConveniado = true;
// VELOCIDADE NA VIA(Tirar dúvida)
let velocidade = 92;
let limite = 80;
if(velocidade > limite){
    console.log("Dentro do limite");
} 
// BOLSA DE ESTUDOS
let media = 9.1;
let frequencia1 = 92;
let rendaFamiliar = 2400;
if(media >= 9 && frequencia1 >= 90 && rendaFamiliar <= 2500){
    console.log("bolsa integral")
} else if (media >= 7 && frequencia >= 75 && rendaFamiliar <= 4000) {
    console.log("Bolsa parcial ")
} else{
    console.log("sem bolsa")
}
// SISTEMA DE LOGIN COM BLOQUEIO 
let usuario = "admin";
let senha1 = "1234";
let tentativas = 2;
if(tentativa >= 3) {
    console.log("Conta Bloqueada");
}else if(usuario === "admin" && senha1 === "1234"){
    console.log("Acesso Liberada")
}else{
    console.log("Credenciais Ínvalidas")
}
// CONSUMO DE ENERGIA
let consumoKWh = 250;
if(consumoKWh <= 100){
    console.log("R$ 0,60 por kWh");
} else if (consumoKWh >=100 && consumoKWh<= 200) {
    console.log("R$ 0,75 por kWh");
} else if (consumoKWh >= 200) {
    console.log("R$ 0,90 por kWh")
}
// PROCESSAMENTO DE PEDIDO(Tirar Dúvida)
let estoque1 = 12;
let quantidade = 3;
let precoUnitario = 80;
let saldoCliente = 220;
let clienteVip = false;
// DESAFIO FINAL(TIRAR DÚVIDA)
let idade5 = 17;
let notaProva = 82;
let frequencia3 = 88;
let autorizacaoResponsavel = true;
let possuiPendencia = false;
