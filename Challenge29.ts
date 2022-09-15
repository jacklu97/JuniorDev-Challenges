/*
 * Reto #29
 * ORDENA LA LISTA
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional
 *   "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 */

const swap = (arr: Array<number>, a: number, b: number) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const sort = (numbers: Array<number>, order: Boolean) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (order && numbers[j] > numbers[i]) {
                swap(numbers, i, j)
            } else if (!order && numbers[i] > numbers[j]) {
                swap(numbers, j, i)
            }
        }
    }
    return numbers;
}


console.log(sort([4, 6, 1, 8, 2], true)) // 1, 2, 4, 6, 8
console.log(sort([4, 6, 1, 8, 2], false)) // 8, 6, 4, 2, 1