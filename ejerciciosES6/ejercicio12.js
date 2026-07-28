/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array: */

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
]; 

function findArrayIndex(array, text) {
    for (const [index, value] of array.entries()) {
        if (value === text) {
            return index;
        }
    }
    return -1;
}

console.log(findArrayIndex(mainCharacters, "Han Solo")); //2
console.log(findArrayIndex(mainCharacters, "Rey"));      //4
console.log(findArrayIndex(mainCharacters, "Yoda"));     //-1 no existe en el array
console.log(findArrayIndex(mainCharacters, "Luke")); 