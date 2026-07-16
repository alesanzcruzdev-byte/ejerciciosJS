/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];

function replaceNonVeganFoods(param) {
    // insert code
    const uniqueFruits = [...new Set(fruits)]; // Eliminar duplicados de frutas
    let fruitIndex = 0;
    for (let i = 0; i < param.length; i++) {
        if (!param[i].isVegan) {
            param[i].name = uniqueFruits[fruitIndex % uniqueFruits.length]; // Reemplazar con fruta única
            fruitIndex++;
        }
    }
    return param;
}

console.log(replaceNonVeganFoods(foodSchedule)); // Devuelve [{ name: "Heura", isVegan: true }, { name: "Strawberry", isVegan: false }, { name: "Tofu", isVegan: true }, { name: "Banana", isVegan: false }, { name: "Rice", isVegan: true }, { name: "Pasta", isVegan: true }]