var custo_fabrica = parseFloat(prompt("Digite o valor do custo de fábrica do carro "));
var custo_final = custo_fabrica * 0.28 + custo_fabrica * 0.45 + custo_fabrica;
alert("O valor final do carro para o consumidor é " + custo_final);