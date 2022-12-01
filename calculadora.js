function calculadora() {
    let primerNumero = parseInt(window.prompt('Ingrese un numero'));
    let operacion = window.prompt('Seleccione operacion [SUMA, RESTA, MULTIPLICACION, DIVISION, RESTO]')
    let segundoNumero = parseInt(window.prompt('Seleccione el segundo numero a operar'));

    operar(primerNumero, operacion, segundoNumero);
}

function operar(primerNumero, operacion, segundoNumero) {
    let resultado;
    if (operacion === 'SUMA') {
        resultado = primerNumero + segundoNumero;
    } else if (operacion === 'RESTA') {
        resultado = primerNumero - segundoNumero;
    } else if (operacion === 'MULTIPLICACION') {
        resultado = primerNumero * segundoNumero;
    } else if(operacion === 'DIVISION') {
        resultado = primerNumero / segundoNumero;
    } else if(operacion === 'RESTO') {
        resultado = primerNumero % segundoNumero;
    } else {
        calculadora();
    }
    if(resultado) {
        console.log(resultado)
        alert('Resultado: ' + resultado);
        return resultado;
    }
}
//lista de tortas
const listaDeTortasDulces= ['chocolate','frutillas','lemon pie','chaja'];
const listaDeTortasSaladas= ['zapallito','fiambre','cebolla','pascualina'];

const listaDeTortas= [listaDeTortasDulces.concat(listaDeTortasSaladas)];
console.log(listaDeTortasDulces);
console.log(listaDeTortasSaladas);
console.log(listaDeTortas);

listaDeTortas.push('empanadas');
console.log(listaDeTortas);
