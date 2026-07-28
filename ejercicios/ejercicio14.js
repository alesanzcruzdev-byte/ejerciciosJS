/* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function repeatCounter(param) {
    // insert code
    const wordCount = {};
    for (let i = 0; i < param.length; i++) {
        const word = param[i];
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}

console.log(repeatCounter(counterWords)); // Devuelve { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }
