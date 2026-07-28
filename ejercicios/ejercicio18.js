/* Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array: */

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

function removePlaces(param) {
  // insert code
  for (let i = 0; i < param.length; i++) {
    if (param[i].id === 11 || param[i].id === 40) {
      param.splice(i, 1);
      i--; // Decrementar i para revisar el nuevo elemento en la posición i
    }
  }
  return param;
}   

console.log(removePlaces(placesToTravel)); // Devuelve [{id: 5, name: 'Japan'}, {id: 23, name: 'Murcia'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
