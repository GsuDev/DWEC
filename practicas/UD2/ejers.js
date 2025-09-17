
// Ejercicio 1
const letraDNI = function (numero) {
  // Letras que corresponden al cálculo del DNI
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE"

  // Comprobamos que el número sea válido (entero, positivo y menor que 100 millones)
  if (!Number.isInteger(numero) || numero < 0 || numero > 99999999) {
    throw new Error("DNI no válido") // Lanzamos un error si no cumple
  }

  // Calculamos el índice: resto de dividir el número entre 23
  return letras[numero % 23]
}

// Ejemplo de uso
console.log(letraDNI(12345678))  // Z



// Ejercicio 2
const invertirTexto = function (texto) {
  // Convertimos el texto en un array con split(""),
  // lo invertimos con reverse() y lo unimos con join("")
  return texto.split("").reverse().join("")
}

// Ejemplo de uso
console.log(invertirTexto("Hola mundo"))  // "odnum aloH"


// Ejercicio 3
const numerosAleatoriosUnicos = function () {
  // Usamos un Set porque no permite duplicados
  const numeros = new Set()
  // Mientras no tengamos 100 números, seguimos generando
  while (numeros.size < 100) {
    // Math.random() genera entre 0 y 1, lo multiplicamos por 1000 y sumamos 1
    let n = Math.floor(Math.random() * 1000) + 1
    numeros.add(n) // Se añaden sin repetirse
  }

  // Convertimos el Set en un array para mostrarlo
  return Array.from(numeros)
}

// Ejemplo de uso
console.log(numerosAleatoriosUnicos())


// Ejercicio 4
const contarLetra = function (frase, letra) {
  let contador = 0

  // Recorremos cada carácter de la frase
  for (let char of frase) {
    // Si coincide con la letra (ignorando mayúsculas/minúsculas), sumamos
    if (char.toLowerCase() === letra.toLowerCase()) {
      contador++
    }
  }

  return contador
}

// Ejemplo de uso
console.log(contarLetra("Hola mundo", "o"))  // 2


// Ejercicio 5
const divisores = function (numero) {
  const lista = []

  // Recorremos desde 1 hasta el número
  for (let i = 1; i <= numero; i++) {
    // Si el resto es 0, significa que es divisor
    if (numero % i === 0) {
      lista.push(i)
    }
  }

  return lista
}

// Ejemplo de uso
console.log(divisores(28))  // [1, 2, 4, 7, 14, 28]


// Ejercicio PUM
const juegoPum = function () {
  // Recupero el container del HTML por id
  const container = document.getElementById('container')

  // Recorro del 1 al 100
  for (let i = 1; i <= 100; i++) {
    // Escribo el número
    container.innerHTML += `${i} ,`
    // Si es múltiplo de 7 o termina en 7, escribo PUM
    if (i % 7 == 0 || i % 10 == 7) {
      container.innerHTML += ' PUM'
      container.innerHTML += '<br>'
    }
    
  }
}

document.addEventListener('DOMContentLoaded', juegoPum)


// Ejercicio Calcular salarios

// Función que calcula el salario BRUTO de un día según turno
const calcularBruto = function (horas, turno) {
  if (turno === 'm') return horas * 15   // Mañana → 15€/h
  if (turno === 't') return horas * 17   // Tarde → 17€/h
  if (turno === 'n') return horas * 20   // Noche → 20€/h
  return 0
}

// Función que aplica descuentos para obtener el salario NETO mensual
const calcularNeto = function (bruto) {
  if (bruto < 600) return bruto * 0.92   // Descuento del 8%
  if (bruto <= 1000) return bruto * 0.90 // Descuento del 10%
  return bruto * 0.88                    // Descuento del 12%
}

// Función que pide datos de un trabajador completo (su mes entero)
const calcularTrabajador = function (indice) {
  let brutoTotal = 0   // Guardará el bruto mensual de este trabajador

  while (true) {
    // Pedir las horas de un día
    let horas = parseInt(
      prompt(`Trabajador ${indice} → Horas trabajadas en el día (cancelar para terminar trabajador):`)
    )

    // Si el usuario cancela o no pone un número → termina este trabajador
    if (isNaN(horas)) break

    // Pedir el turno de ese día
    let turno = prompt("Turno (m/t/n):").toLowerCase()

    // Sumar al bruto mensual las horas de ese día
    brutoTotal += calcularBruto(horas, turno)
  }

  // Calcular el salario neto a partir del bruto acumulado
  let neto = calcularNeto(brutoTotal)

  // Devolver ambos valores en un objeto
  return { bruto: brutoTotal, neto }
}

// Función principal que controla toda la aplicación 
const iniciarCalculo = function () {
  let resultado = ""        // Texto que mostraremos al final en el HTML
  let totalGlobal = 0       // Acumula todos los salarios netos
  let contadorTrabajadores = 1 // Contador de trabajadores

  // Se podría usar un booleano en vez de un bucle infinito con break
  while (true) {
    // Preguntar si queremos añadir un nuevo trabajador
    let continuar = confirm("¿Añadir un nuevo trabajador?")
    if (!continuar) break // Si el usuario cancela → salimos del bucle

    // Calcular salario de este trabajador
    let trabajador = calcularTrabajador(contadorTrabajadores)

    // Guardar en la variable resultado el bruto y neto del trabajador
    resultado += `Trabajador ${contadorTrabajadores} → Bruto: ${trabajador.bruto}€, Neto: ${trabajador.neto.toFixed(2)}€<br>`

    // Sumar su neto al total global
    totalGlobal += trabajador.neto

    // Pasar al siguiente trabajador
    contadorTrabajadores++
  }

  // Al final, mostrar también el total abonado
  resultado += `<strong>Total salarios abonados: ${totalGlobal.toFixed(2)}€</strong>`

  // Insertar el resultado en el div del HTML
  document.getElementById("resultado").innerHTML = resultado
}

// Asociar la función principal al botón cuando cargue la página
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcular").addEventListener("click", iniciarCalculo)
})
