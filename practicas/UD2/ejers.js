
// Ejercicio 1
function letraDNI(numero) {
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
function invertirTexto(texto) {
  // Convertimos el texto en un array con split(""),
  // lo invertimos con reverse() y lo unimos con join("")
  return texto.split("").reverse().join("")
}

// Ejemplo de uso
console.log(invertirTexto("Hola mundo"))  // "odnum aloH"


// Ejercicio 3
function numerosAleatoriosUnicos() {
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
function contarLetra(frase, letra) {
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
function divisores(numero) {
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
