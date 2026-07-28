// Completa la función que tomando dos números como argumento devuelva el más alto.

function getMaxNumber(numberOne , numberTwo) {
  // insert code
    if (numberOne > numberTwo) {
        console.log("El primer número es más alto");
        return numberOne;
    } else {
        console.log("El segundo número es más alto");
        return numberTwo;
    }
}

getMaxNumber(51, 10); // Devuelve 51
