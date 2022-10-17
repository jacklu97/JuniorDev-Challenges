/*
 * Reto #34
 * LOS NÚMEROS PERDIDOS
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, crea una función que calcule
 * y retorne todos los que faltan entre el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

class ErroneusInputException extends Error {
    constructor(message?: string) {
        let errorMsg = "Input is not correctly set";
        super(message || errorMsg);
    }
}

const lostNumbers = (numbers: number[]): number[] => {
    const firstNumber = numbers[0];
    const lastNumber = numbers[numbers.length - 1];
    const asc = lastNumber > firstNumber;

    if (numbers.length < 2) {
        throw new ErroneusInputException("Input array has to contain more than 2 numbers")
    }

    let prevNum: number | null = null;

    numbers.forEach(n => {
        if (prevNum) {
            if ( asc ? n <= prevNum : n >= prevNum) {
                throw new ErroneusInputException();
            }
        }
        prevNum = n;
    })
    
    let lostNumbers: Set<number> = new Set();

    for (let i = firstNumber; i < lastNumber; i++) {
        if (!numbers.includes(i) && !lostNumbers.has(i)) {
            lostNumbers.add(i);
        }
    }

    for (let number of getNumberList(asc, firstNumber, lastNumber)) {
        if (!numbers.includes(number) && !lostNumbers.has(number)) {
            lostNumbers.add(number)
        }
    }

    return [...lostNumbers];
}

const getNumberList = (order: boolean, firstNumber: number, lastNumber: number): Array<number> => {
    let result: Array<number> = [];
    if (order) {
        result = [...Array<number>(lastNumber)].map(x => x++);
    } else {
        result = [...Array<number>(firstNumber)].map(x => x--)
    }
    return result
}

try {
    console.log(lostNumbers([1, 3, 5]))
    console.log(lostNumbers([5, 3, 1]))
    // console.log(lostNumbers([1]))
    console.log(lostNumbers([5, 1]))
    console.log(lostNumbers([-5, 1]))
    console.log(lostNumbers([1, 3, 3, 5]))
    console.log(lostNumbers([5, 7, 1]))
    console.log(lostNumbers([10, 7, 7, 1]))
} catch(exception) {
    let error = exception as ErroneusInputException;
    console.log(error.message)
}