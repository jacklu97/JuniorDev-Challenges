/*
 * Reto #21
 * CALCULADORA .TXT
 * Dificultad: MEDIA
 *
 * Enunciado: Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
 *
 * */

import * as fs from 'fs';
import path from 'path';
import Stack from './utils/Stack';

interface Operations {
    [operation: string]: Function;
}

class Calculator {
    operandsStack: Stack<number> = new Stack<number>();
    lastOperation: string = '';
    input: string = '';
    result: number = 0;

    operations: Operations = {
        "+": (a:number, b:number): number =>  { return a + b},
        "-": (a:number, b: number) =>  a - b,
        "*": (a:number, b: number) => a * b,
        "/": (a:number, b: number) => a / b
    }

    constructor(){};


    readFile(filename: string) {
        try {
            this.input = fs.readFileSync(filename, 'utf8');
        } catch (err) {
            throw new Error("There was a problem reading the input");
        }
    }

    calculate(): number | string {
        if (this.input === '') {
            return 0;
        }
        let fileErr = false;
        for(let element of this.input.split('\n')) {
            let val = Number.parseFloat(element);
            if (!isNaN(val)) { // Is a number
                if (this.lastOperation === '') {
                    this.operandsStack.push(val);
                } else {
                    this.result = this.operations[this.lastOperation](this.operandsStack.pop(), val);
                    this.operandsStack.push(this.result);
                }
            } else { // is an operator
                if (this.operandsStack.isEmpty()) {
                    fileErr = true;
                    break;
                }
                this.lastOperation = element.trim();
            }
        }
        return fileErr ? "There is an error with the elements" : this.result;
    }
}

const FILE_NAME: string = "Challenge21.txt";
const FILE_PATH: string = path.join(__dirname, FILE_NAME);

const myCalculator: Calculator = new Calculator();

myCalculator.readFile(FILE_PATH);
console.log(myCalculator.calculate());