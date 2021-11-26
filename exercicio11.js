var anos = parseInt(prompt("Digite sua idade em anos"));
var meses = parseInt(prompt("Digite sua idade em meses"));
var dias = parseInt(prompt("Digite sua idade em dias"));
var total_dias = dias + (meses * 30) + (anos * 365);
alert("A sua idade em dias é " + total_dias);