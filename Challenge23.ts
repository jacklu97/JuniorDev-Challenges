/*
 * Reto #23
 * MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO
 * Dificultad: MEDIA
 *
 * Enunciado: Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 */

/**
 * Generator function to get prime numbers
 * @returns next prime number
 */
function* primeNumber() {
    let val = 2;

    const isPrime = (val: number): boolean => {
        for (let i = 2; i < val; i++) {
            if (val % i === 0) return false;
        }
        return true;
    }

    while(true) {
        if (isPrime(val)) yield val;
        val++;
    }
}

const gen = primeNumber();

/**
 * Function to calculate the multiples of an array of numbers using the technique of prime numbers division
 * @param values        array of numbers to get their multiples
 * @param primeToUse    prime number used to calculate
 * @param primesUsed    array of prime numbers used
 * @returns             array of prime numbers used in the process
 */
const getMultiples = (values: Array<number>, primeToUse: number, primesUsed: Array<number>): Array<number> => {
    if (primesUsed.length > 0 && values.every(val => val === 1)) return primesUsed
    let newVals: Array<number> = [];
    let usefulPrime: boolean = false;
    let primeUsed: boolean = false;
    values.forEach(val => { 
        let temp: number;
        if (val % primeToUse === 0) { 
            temp = val / primeToUse;
            newVals.push(temp);
            primeUsed = true;
            !usefulPrime ? usefulPrime = temp % primeToUse === 0 : null;
        } else {
            newVals.push(val)
        }
    })
    primeUsed ? primesUsed.push(primeToUse) : null;
    let newPrime = usefulPrime ? primeToUse : (gen.next().value as number);
    return getMultiples(newVals, newPrime, primesUsed);
}

/**
 * Calculates the mcm of two numbers
 * @param firstNumber 
 * @param secondNumber 
 * @returns the mcm
 */
const mcm = (firstNumber: number, secondNumber: number): number => {
    return getMultiples([firstNumber, secondNumber], (gen.next().value as number), []).reduce((a,b) => a*b)
}

/**
 * Calculates the MCD using the Euclades formula
 * @param firstNumber 
 * @param secondNumber 
 * @returns the MCD
 */
const mcd = (firstNumber: number, secondNumber: number): number => {
    if (firstNumber === 0 || secondNumber === 0) return firstNumber + secondNumber;
    return mcd(secondNumber, firstNumber % secondNumber);
}

console.log(mcm(56, 180))
console.log(mcd(56, 180))