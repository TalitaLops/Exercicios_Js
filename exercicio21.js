var nota1 = +(prompt("Digite o valor da primeira nota: "));
var nota2 = +(prompt("Digite o valor da segunda nota: "));
var media = (nota1 + nota2) / 2;

if (media < 6) {
    alert("A média do aluno é " + media + ". Aluno reprovado");
} else {
    alert("A média do aluno é " + media + ". Aluno aprovado");
}