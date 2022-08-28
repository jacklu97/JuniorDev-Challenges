/*
 * Reto #22
 * CONJUNTOS
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 *
 */

// 

const calculateSet = (arr1: Array<any>, arr2: Array<any>, flag: boolean): Array<any> => {
    let [val1, val2] = [new Set(arr1), new Set(arr2)];
    return flag ? [...val1].filter(el => val2.has(el)) : [...val1].filter(el => !val2.has(el)).concat([...val2].filter(el => !arr1.includes(el)));
}

console.log(calculateSet([1, 2, 3, 3, 4], [2, 2, 3, 3, 3, 4, 6], true))
console.log(calculateSet([1, 2, 3, 3, 4], [2, 2, 3, 3, 3, 4, 6], false))