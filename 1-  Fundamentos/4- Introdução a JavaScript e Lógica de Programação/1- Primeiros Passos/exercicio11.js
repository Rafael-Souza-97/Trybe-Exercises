// exercicio 11

let aliquotaINSS;
let aliquotaIR; 
const salario = 5000;

if ( salario <= 1556.94 ) {
    aliquotaINSS = salario * 0.08;
} else if ( salario <= 2594.92) {
    aliquotaINSS = salario * 0.09;
} else if ( salario <= 5189.82) {
    aliquotaINSS = salario * 0.11;
} else {
    aliquotaINSS = 570.88;
}

const salarioBase = salario - aliquotaINSS;

if ( salarioBase <= 1903.98 ) {
    aliquotaIR = 0;
} else if ( salarioBase <= 2826.65) {
    aliquotaIR = ( salarioBase * 0.075) - 142.80;
} else if ( salarioBase <= 3751.05) {
    aliquotaIR = ( salarioBase * 0.15) - 354.80;
}  else if ( salarioBase <= 4664.68) {
    aliquotaIR = ( salarioBase * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36
}

const salarioLiquido = salarioBase - aliquotaIR

console.log(`salarioLiquido ${salario} e ${salarioLiquido}`)
