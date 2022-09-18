/*
 * Reto #32
 * EL SEGUNDO
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un listado de números, encuentra el SEGUNDO más grande.
 * 
 */

import Stack from './utils/Stack';

const findSecondGreater = (numbers: number[]): number => { 
    const myStack = new Stack<number>();

    numbers.forEach(num => {
        if (myStack.isEmpty()) {
            myStack.push(num);
        } else {
            myStack.top() < num ? myStack.push(num) : null;
        }
    })

    myStack.size() > 1 ? myStack.pop() : null;
    return myStack.top();
}

console.log(findSecondGreater([4, 6, 1, 8, 2]))
console.log(findSecondGreater([4, 6, 8, 8, 6]))
console.log(findSecondGreater([4, 4]))
console.log(findSecondGreater([]))