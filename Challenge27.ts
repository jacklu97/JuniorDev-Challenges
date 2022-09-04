/*
 * Reto #27
 * VECTORES ORTOGONALES
 * Fecha publicación enunciado: 07/07/22
 * Fecha publicación resolución: 11/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 *
 */

import Pair from "./utils/Pair";

const areOrthogonal = (vector1: Pair<number, number>, vector2: Pair<number, number>): boolean =>  {
    return vector1.first * vector2.first + vector1.second * vector2.second === 0;
}
 
console.log(areOrthogonal(new Pair(1, 2), new Pair(2, 1)))
console.log(areOrthogonal(new Pair(2, 1), new Pair(-1, 2)))
console.log(areOrthogonal(new Pair(2, 3), new Pair(-1, 0)))