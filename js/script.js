// Escribi una calculadora que pida al usuario dos numeros y despues le de a elegir que calculo desea realizar. Esto no tiene que ver tanto con mi
// proyecto final pero apunto a plasmar lo que aprendi de js.

let nombre, apellido, resultado, numero1, numero2, opcion, contador;
let bandera = confirm('Desea probar la calculadora?');

if (bandera == true) {
	nombre = prompt('Ingrese su nombre');
	apellido = prompt('Ingrese su apellido');
	contador = 0;

	if (nombre != '' && apellido != '' && nombre != null && apellido != null) {
		alert('Su usuario es: \nNombre: ' + nombre + '\nApellido: ' + apellido);
		console.log('Usuario: ' + nombre + ' ' + apellido);

		do {
			opcion = prompt(
				'Ingrese la operacion que desea realizar: ' +
					'\nSi desea sumar escriba: SUMA' +
					'\n' +
					'\nSi desea multiplicar escriba: MULTIPLICACION' +
					'\n' +
					'\nSi desea restar escriba: RESTA' +
					'\n' +
					'\nSi desea dividir escriba: DIVISION' +
					'\nSi desea salir escriba: SALIR'
			);

			if (opcion != 'SALIR') {
				ingresoDeDatos();
			}

			if (opcion == 'SUMA') {
				sumar(numero1, numero2);
				mostrar(resultado);
				contador = contador + 1;
			} else if (opcion == 'MULTIPLICACION') {
				multiplicar(numero1, numero2);
				mostrar(resultado);
				contador = contador + 1;
			} else if (opcion == 'RESTA') {
				restar(numero1, numero2);
				mostrar(resultado);
				contador = contador + 1;
			} else if (opcion == 'DIVISION') {
				dividir(numero1, numero2);
				mostrar(resultado);
				contador = contador + 1;
			} else if (opcion != 'SALIR') {
				alert('La opcion ingresada fue invalida');
			}
		} while (opcion != 'SALIR');
	} else {
		alert('El nombre o usuario ingresado no es correcto');
		console.warn('NOMBRE DE USUARIO INVALIDO');
	}

	if (resultado != null) {
		alert('Usted realizo ' + contador + ' calculos');
		console.log('Se realizaron: ' + contador + ' calculos');
	}
} else {
	alert('Si desea cambiar de opinion refresque la pagina! :)');
}

function ingresoDeDatos() {
	numero1 = parseFloat(prompt('Ingrese el primer numero: '));
	numero2 = parseFloat(prompt('Ingrese el segundo numero: '));
}

function multiplicar(parametro1, parametro2) {
	resultado = parametro1 * parametro2;
}

function sumar(parametro1, parametro2) {
	resultado = parametro1 + parametro2;
}

function restar(parametro1, parametro2) {
	resultado = parametro1 - parametro2;
}

function dividir(parametro1, parametro2) {
	resultado = parametro1 / parametro2;
}

function mostrar(valorAMostrar) {
	alert('El resultado es: ' + resultado);
	console.log('El resultado es: ' + resultado);
}
