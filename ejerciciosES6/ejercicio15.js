/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
]; 

function swap(array, param1, param2) {
    const firstPosition = array[param1];
    const secondPosition = array[param2];

    array[param1] = secondPosition;
    array[param2] = firstPosition;

    return array;
}

console.log( swap(fantasticFour, 3, 0));
