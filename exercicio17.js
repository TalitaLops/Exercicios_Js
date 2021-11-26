var salario_fixo = parseFloat(prompt("Digite o salário fixo do funcionário"));
var vendas = parseFloat(prompt("Digite o valor das vendas:"));

if (vendas <= 1500) {
    var comissao = vendas * 3 / 100;
    var salario_total = salario_fixo + comissao;

    alert("O salário total é de R$" + salario_total);
} else {
    var comissao1 = (vendas - 1500) * 5 / 100;
    var comissao2 = 1500 * 3 / 100;
    var salario_total = salario_fixo + comissao1 + comissao2;

    alert("O salário total é de R$" + salario_total);

}