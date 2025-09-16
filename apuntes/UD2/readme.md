# Apuntes UD2 - Fundamentos de JS

> 🔗 Enlace a la entrada de la web de inma [aquí](https://igijon.github.io/dwec/fundamentos/js_fundamentos.html)👈

## Directrices

### Funciones

No usamos funciones nombradas, usamos funciones anonimas asociadas a variables y funciones flecha (funciones lambda):

```JS
miFuncion = function () {
  // Contenido de la función
}

miSegundaFunción = () => {
  // Contenido de la función
}
```

### Valor y referencia

Los tipos primitivos en JS se pasan como valor y los objetos se pasan por referencia.

⚠️ Cuidado porque los objetos literales al hacerle el spread a un objeto literal se pasa una copia de primer nivel:

```js
const original = {
  nombre: "Jesús",
  direccion: {
    ciudad: "Ciudad Real",
    calle: "Mayor 123"
  }
}

const copia = { ...original } // copia superficial

copia.nombre = "Pedro"                // se cambia solo en copia
copia.direccion.ciudad = "Madrid"     // ⚠️ esto cambia también en original

console.log(original.nombre)       // Jesús
console.log(original.direccion.ciudad) // Madrid (se cambió en ambos!)
```
