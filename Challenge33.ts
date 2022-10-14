/*
 * Reto #33
 * CICLO SEXAGENARIO CHINO
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un función, que dado un año, indique el elemento y animal correspondiente
 * en el ciclo sexagenario del zodíaco chino.
 * - Información: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos madera,
 *   fuego, tierra, metal, agua y los animales rata, buey, tigre, conejo, dragón, serpiente,
 *   caballo, oveja, mono, gallo, perro, cerdo (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 */

const chineseZodiac = (year: number): string => {
    const startingYear = 604;
    let elements = ["madera", "fuego", "tierra", "metal", "agua"];
    let animals = ["rata", "buey", "tigre", "conejo", "dragón", "serpiente", "caballo", "oveja", "mono", "gallo", "perro", "cerdo"];

    if (year < startingYear) {
        return "El ciclo sexagenario comenzó en el año 604."
    }

    let element = Math.floor((year - startingYear) % (elements.length * 2) / 2);
    let animal = (year - startingYear) % animals.length

    return `${year}: ${elements[element]} ${animals[animal]}`;
}

console.log(chineseZodiac(1924))
console.log(chineseZodiac(1946))
console.log(chineseZodiac(1984))
console.log(chineseZodiac(604))
console.log(chineseZodiac(603))
console.log(chineseZodiac(1987))
console.log(chineseZodiac(2022))