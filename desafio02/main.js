//Dados do usuário
const nomeUsuario = prompt("Qual é o seu nome?")
const idadeDoUsuario = prompt("Quantos anos você tem?")
const linguagemDoUsuario = prompt("Qual linguagem de programação você está estudando?")
const msg = `Olá ${nomeUsuario}, você tem ${idadeDoUsuario} e já está aprendendo ${linguagemDoUsuario}`
alert(msg)

const msg2 = `Você gosta de estudar ${linguagemDoUsuario}? Responda com o número 1 para SIM ou 2 para NÃO.`
const respostaDoUsuario = prompt(msg2)

if (respostaDoUsuario == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}