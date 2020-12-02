// Codigo1. ejercicio uno. Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
var num1, num2
function operacion (num1, num2) {
	suma = num1 + num2;
  resta = num1 - num2;
  multiplicacion = num1*num2;
  division = num1/num2;
  return console.log('el valor de la suma es: '+ suma + '\n\nel valor de la resta es: ' + resta + '\n\nel valor de la multiplicacion es: ' + multiplicacion + '\n\nel valor de la  division es: ' + division)
}

//ejercicio2. Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

var lado1, lado2, lado3;
function triangulo(lado1, lado2, lado3) {
  if (lado1==lado2 && lado2==lado3) {
    console.log('El triangulo es equilatero')   
  } else {
        if((lado1==lado2 && lado2!=lado3) || (lado1!=lado2 && lado2==lado3)) {
    	    console.log('El triangulo es Isosceles')
  				            } else {
    			                    console.log('el triangulo es escaleno')
  							        }
  		}
}

//ejercicio3. Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

var base, exp;
function elevado(base, exp) {
  control = 1;
  for (var i=0; i < exp; i++) {
    potencia = control*base;
    control = potencia;
    }
  return console.log('la potencia de ' + base + ' elevado a ' + exp + ' es: ' + potencia);
}


// ejercicio4. Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

var num1, num2;
var operacion = prompt('escoja una operacion:')

function moneda(num1,num2) {
  let resultado;
  let comparativo;
  let entero, decimal;
  
	var a = Number(num1);
  var b = Number(num2)
  
  switch (operacion) {
    case 'suma' :
      resultado = a+b;
      break;
    
    case 'resta' :
	 	 resultado = a-b;
      break;
    
    case 'multiplicacion' :
      resultado = a*b;
      break;
    
    case 'division' : 
      resultado = a/b;
      break;  
      }
  
  if (resultado > 1) {
    entero = parseInt(resultado);
    decimal = (resultado - entero)*100;
    return console.log('El valor es R$: '+ entero + ',' + decimal)   
  } else {
    entero = parseInt(resultado*100);
    return console.log('El valor es R$: ' + '0,'+entero);    
  } 
  
}


//06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.


var capitalInicial;
var tasadeInteres;
var plazo; 
//el plazo se carga en años en esta función
var opcion = prompt('Nivel de Riesgo');
// calculo de la tasa del monto total
// Si el nivel de riesgo sera "ALTO" se calculara a interes compuesto, si el nivel es "BAJO" se calculara a interes simple

function aPagar(capitalInicial, tasadeInteres, plazo) {
  let MontoTotal; 
  
  switch (opcion) {
    	case 'BAJO' :
     	 MontoTotal = capitalInicial*(tasadeInteres/100)*plazo;
      	break;
    	case 'ALTO':
     	 MontoTotal = capitalInicial*(((1+(tasadeInteres/100))**plazo)-1);
      	break;
  				}
   	
  
 		 return console.log(`\nPara su nivel de Riesgo ${opcion}\n\nMonto de Intereses = ${MontoTotal.toFixed(2)}\n\nMonto Total a Pagar = ${(MontoTotal+capitalInicial).toFixed(2)}\n\n`); 
  
 }

 //TABLA DE AMORITZACION - TODO JUNTO

 var capitalInicial;
var tasadeInteres;
var plazo;
var opcion = prompt('Nivel de Riesgo');

function aPagar(capitalInicial, tasadeInteres, plazo) {
  let MontoTotal;
  let valoraPagar;
  
  switch (opcion) {
    	case 'BAJO' :
     	 MontoTotal = capitalInicial*(tasadeInteres/100)*plazo;
      	break;
    	case 'ALTO':
     	 MontoTotal = capitalInicial*(((1+(tasadeInteres/100))**plazo)-1);
      	break;
  				}

    valoraPagar = MontoTotal + capitalInicial;
   console.log(`\nPara su nivel de Riesgo ${opcion}\n\nMonto de 		Intereses = ${MontoTotal.toFixed(2)}\n\nMonto Total a Pagar = 		${valoraPagar.toFixed(2)}\n\n`); 
  
  return Number(valoraPagar.toFixed(2));
   
 }

function valorMensual(valoraPagar, plazo) {
  valorMensual = valoraPagar/(plazo*12);
  return Number(valorMensual.toFixed(2));
}

function tablaAmortizacion(valoraPagar, valorMensual,plazo) {
  let valorAdeudado;
  let valorResto;
  
  for (var i=0; i<(plazo*12); i++) {
    valorAdeudado = valoraPagar - (i)*valorMensual;
    valorResto = valorAdeudado - valorMensual;
    
    console.log(`\nCuota: ${i+1}\n\nMonto Adeudado:     ${valorAdeudado}\n\nPago Mensual: ${valorMensual}\n\nValor Restante: ${valorResto}`);    
  }
  
  return valorAdeudado;
  
  }






