const calc = require("./calculadora");

let op = Number(prompt(
    "1-Somar\n2-Subtrair\n3-Multiplicar\n4-Dividir\n5-Histórico"
));

let historico = [];

if (op >= 1 && op <= 4) {
    let a = Number(prompt("N1:"));
    let b = Number(prompt("N2:"));
    let r;

    if (op === 1) r = calc.somar(a, b);
    if (op === 2) r = calc.subtrair(a, b);
    if (op === 3) r = calc.multiplicar(a, b);
    if (op === 4) r = calc.dividir(a, b);

    if (r === false) {
        console.log("Erro: divisão por zero");
    } else {
        historico.push(r);
        console.log("Resultado:", r);
    }
}

if (op === 5) {
    console.log("Histórico:", historico);
}
