var inicio = +(prompt("Digite o horário inicial da partida de xadrez"));
var final = +(prompt("Digite o horário final da partida de xadrez"));

if (inicio > final) {
    var duracao = final - inicio + 24;
    alert("A duração do jogo de xadrez é: " + duracao);
} else {
    var duracao = final - inicio;
    alert("A duração do jogo de xadrez é: " + duracao);
}