frutas = ['a', 'b', 'c', ['hola', 'adios', 'buenas']]

frutasCopia = [...frutas]

console.log(frutasCopia[0], frutasCopia[3][0])

frutasCopia[3][0] = 'melon'

console.log(frutas[3][0], frutasCopia[3][0])