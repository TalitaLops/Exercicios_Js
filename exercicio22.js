var nascimento = +(prompt("Digite o ano do seu nascimento:"));
var ano = +(prompt("Diite o ano atual:"));
var voto = ano - nascimento;
if (voto > 16) {
    alert("Você pode votar esse ano!");
} else {
    alert("Você não pode votar esse ano!");
}