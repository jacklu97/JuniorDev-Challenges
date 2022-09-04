
/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 *
 */

import Pair from "./utils/Pair";

enum Move {
    ROCK,
    SCISSORS,
    PAPER
}

const arrayListOf = (...elements: any) => {
    return [...elements];
}

const rockScissorsPaper = (movements: Array<Pair<Move, Move>>): string => {
    let player1 = 0;
    let player2 = 0;

    const defeats = (movement: Move): Move => {
        switch(movement) {
            case Move.PAPER:
                return Move.ROCK;
            case Move.ROCK:
                return Move.SCISSORS;
            case Move.SCISSORS:
                return Move.PAPER;
        }
    }

    movements.forEach(move => {
        if (!move.areEqual()) {
            if (defeats(move.first) === move.second) {
                player1++;
            } else {
                player2++;
            }
        }
    })

    return player1 === player2 ? "Tie" : player1 > player2 ? "Player 1" : "Player 2"
}

console.log(rockScissorsPaper(arrayListOf(new Pair(Move.ROCK, Move.ROCK))))
console.log(rockScissorsPaper(arrayListOf(new Pair(Move.ROCK, Move.SCISSORS))))
console.log(rockScissorsPaper(arrayListOf(new Pair(Move.PAPER, Move.SCISSORS))))
console.log(rockScissorsPaper(arrayListOf(
    new Pair(Move.ROCK, Move.ROCK),
    new Pair(Move.SCISSORS, Move.SCISSORS),
    new Pair(Move.PAPER, Move.PAPER))))
console.log(rockScissorsPaper(arrayListOf(
    new Pair(Move.ROCK, Move.SCISSORS),
    new Pair(Move.SCISSORS, Move.PAPER),
    new Pair(Move.SCISSORS, Move.ROCK))))
console.log(rockScissorsPaper(arrayListOf(
    new Pair(Move.ROCK, Move.PAPER),
    new Pair(Move.SCISSORS, Move.ROCK),
    new Pair(Move.PAPER, Move.SCISSORS))))
