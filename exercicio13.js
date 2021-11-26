var salarioatual = parseFloat(prompt("Digite o salario atual do funcionário: "));
var reajuste = parseFloat(prompt("Digite o percentual do reajuste"));
var salariofinal = (salarioatual * reajuste / 100) + salarioatual;
alert("O novo salário corresponde a " + salariofinal + " R$");