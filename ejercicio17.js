/* Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto: */

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

function printAlienData(param) {
    // insert code
    for (const key in param) {
        console.log(`${key}: ${param[key]}`);
    }
}

printAlienData(alien); // Devuelve name: Wormuck, race: Cucusumusu, planet: Eden, weight: 259kg