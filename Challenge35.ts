/*
 * Reto #35
 * BATALLA POKÉMON
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule el daño de un ataque durante una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 */

const ATTACK_DEFENSE_LIMIT = 100;

enum PokemonType {
    WATER = "Agua",
    FIRE = "Fuego",
    GRASS = "Planta",
    ELECTRIC = "Eléctrico"
}

const Weakness = new Map<PokemonType, Array<PokemonType>>(
    [
        [PokemonType.WATER, [PokemonType.GRASS, PokemonType.ELECTRIC]],
        [PokemonType.FIRE, [PokemonType.WATER]],
        [PokemonType.GRASS, [PokemonType.FIRE]],
        [PokemonType.ELECTRIC, []],
    ]
)

const NotVeryEffective = new Map<PokemonType, Array<PokemonType>>(
    [
        [PokemonType.WATER, [PokemonType.WATER, PokemonType.GRASS]],
        [PokemonType.FIRE, [PokemonType.WATER, PokemonType.FIRE]],
        [PokemonType.GRASS, [PokemonType.FIRE, PokemonType.GRASS]],
        [PokemonType.ELECTRIC, [PokemonType.ELECTRIC, PokemonType.GRASS]],
    ]
)

const EffectivenessMsg: {
    [effectivenessRange: number]: string
} = {
    1: "Is neutral",
    2: "Is super effective",
    0.5: "Is not very effective"
}

const battle = (atackerType: PokemonType, attackedType: PokemonType, attackScore: number, deffenceScore: number): string => {
    if (attackScore > ATTACK_DEFENSE_LIMIT || deffenceScore > ATTACK_DEFENSE_LIMIT) return "Attack or defense can't be over 100 points";

    let effectiveness: number = 1;
    const isVeryEffective: boolean = Weakness.get(attackedType)!.includes(atackerType);
    const isNotVeryEffective: boolean = NotVeryEffective.get(atackerType)!.includes(attackedType);

    if (isVeryEffective) effectiveness = 2;
    else if(isNotVeryEffective) effectiveness = 0.5;

    console.log(EffectivenessMsg[effectiveness]);

    return String(50 * (attackScore / deffenceScore) * effectiveness)
}

console.log(battle(PokemonType.WATER, PokemonType.FIRE, 50, 30))
console.log(battle(PokemonType.WATER, PokemonType.FIRE, 101, -10))
console.log(battle(PokemonType.FIRE, PokemonType.WATER, 50, 30))
console.log(battle(PokemonType.FIRE, PokemonType.FIRE, 50, 30))
console.log(battle(PokemonType.GRASS, PokemonType.ELECTRIC, 30, 50))