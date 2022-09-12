/*
 * Reto #28
 * MÁQUINA EXPENDEDORA
 * Dificultad: MEDIA
 *
 * Enunciado: Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección del producto.
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor
 *   número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje
 *   y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 *
 */

import Pair from './utils/Pair';

interface ReturnMoneyParams {
    moneyToReturn?: Array<number>,
    totalInserted?: number
}

const Money: {[denomination: string] : number} = {
    FIVE: 5, 
    TEN: 10, 
    FIFTY: 50,
    ONEHUMDRED: 100,
    TWOHUNDRED: 200
}

const buy = (elementIndx: number, moneyInserted: Array<number>) => {
    const products = new Map(
        [
            [1, new Pair("Agua", 50)], 
            [2, new Pair("Coca-Cola", 100)],
            [3, new Pair("Cerveza", 155)],
            [4, new Pair("Pizza", 200)],
            [10, new Pair("Donut", 75)]
        ]
    )
    
    // Check if we have the product requested
    if (!products.has(elementIndx)) {
        console.log("Product not found, returning inserted money")
        returnMoney(0, {moneyToReturn: moneyInserted})
        return;
    }

    const totalInserted = moneyInserted.reduce((acc, act) => acc+act, 0);
    const [nameOfItem, costOfItem] = products.get(elementIndx)!

    // Check if user can actually buy the item
    if (totalInserted < costOfItem) {
        console.log("Insuficient money, returning inserted money")
        returnMoney(0, {moneyToReturn: moneyInserted})
        return;
    }

    console.log("Product selected: ", nameOfItem)
    returnMoney(Number(costOfItem), {totalInserted})
}

const returnMoney = (moneyCharged: number, params: ReturnMoneyParams) => {
    if (!moneyCharged) {
        console.log(params.moneyToReturn)
    } else {
        const toBeReturn = Number(params.totalInserted) - moneyCharged;
        let returnArray: number[] = [];
        let returnNumber = 0;
        if (toBeReturn > 0) {
            while (returnNumber !== toBeReturn) {
                let tempR = toBeReturn - returnNumber;
                for (let type of Object.keys(Money).reverse()) {
                    let possible = Money[type]
                    if (tempR - possible >= 0) {
                        returnArray.push(possible);
                        returnNumber+= possible;
                        break;
                    }
                }
            }
        }
        console.log(returnArray)
    }
}


buy(1, [Money.FIVE, Money.FIVE, Money.TEN, Money.TEN, Money.TEN, Money.FIVE])
buy(3, [Money.FIVE, Money.FIVE, Money.TEN, Money.TEN, Money.TEN, Money.FIVE])
buy(1, [Money.FIVE, Money.FIVE, Money.TEN, Money.TEN, Money.TEN, Money.FIVE, Money.FIFTY])
buy(5, [Money.TWOHUNDRED])
buy(2, [Money.FIFTY, Money.FIFTY])