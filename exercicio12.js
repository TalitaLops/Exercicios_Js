var votos = parseFloat(prompt("Digite o número total de eleitores do município"));
var brancos = parseFloat(prompt("Digite a quantidade de votos em branco nessa eleição"));
var nulos = parseFloat(prompt("Digite a quantidade de votos nulos nessa eleição"));
var validos = parseFloat(prompt("Digite a quantidade de votos válidos nessa eleição"));
var porcentagem_validos = validos * 100 / votos;
var porcentagem_brancos = brancos * 100 / votos;
var porcentagem_nulos = nulos * 100 / votos;

alert("O total de votos validos foi " + porcentagem_validos + "%");
alert("O total de votos em branco foi " + porcentagem_brancos + "%");
alert("O total de votos nulos foi " + porcentagem_nulos + "%");