var numero1 = +(prompt("Digite um valor"));
var numero2 = +(prompt("Digite um valor"));

if (numero1 > numero2) {
    alert("O " + numero1 + " é maior que " + numero2);
} else if (numero1 == numero2) {
    alert("O valores são iguais");
} else {
    alert("O " + numero2 + " é maior que " + numero1);
}