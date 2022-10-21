/*
 * Reto #36
 * LOS ANILLOS DE PODER
 * Dificultad: MEDIA
 *
 * Enunciado: ¡La Tierra Media está en guerra! En ella lucharán razas leales a Sauron
 * contra otras bondadosas que no quieren que el mal reine sobre sus tierras.
 * Cada raza tiene asociado un "valor" entre 1 y 5:
 * - Razas bondadosas: Pelosos (1), Sureños buenos (2), Enanos (3), Númenóreanos (4), Elfos (5)
 * - Razas malvadas: Sureños malos (2), Orcos (2), Goblins (2), Huargos (3), Trolls (5)
 * Crea un programa que calcule el resultado de la batalla entre los 2 tipos de ejércitos:
 * - El resultado puede ser que gane el bien, el mal, o exista un empate. Dependiendo de la
 *   suma del valor del ejército y el número de integrantes.
 * - Cada ejército puede estar compuesto por un número de integrantes variable de cada raza.
 * - Tienes total libertad para modelar los datos del ejercicio.
 * Ej: 1 Peloso pierde contra 1 Orco, 2 Pelosos empatan contra 1 Orco, 3 Pelosos ganan a 1 Orco.
 *
 */

import Pair from "./utils/Pair";
import ListOf from "./utils/ListOf";

enum KindArmy {
    HARFOOT = 1, 
    SOUTHERNER = 2,
    DWARF = 3,
    NUMENOREAN = 4,
    ELF = 5
}

enum EvilArmy {
    SOUTHERNER = 2, 
    ORC = 2, 
    GOBLIN = 2, 
    WARG = 3, 
    TROLL = 5
}

enum PossibleResults {
    DRAW = "DRAW",
    EVIL = "EVIL WINS!",
    GOOD = "GOOD WINS!"
}

const getArmyPower = (army: ListOf<Pair<EvilArmy | KindArmy, number>>): number => {
    return army.map(i => i.first * i.second).reduce((total, current) => total + current, 0);
}

const battleForTheMiddleEarth = (kindArmy: ListOf<Pair<KindArmy, number>>, evilArmy: ListOf<Pair<EvilArmy, number>>) => {
    const kindPower = getArmyPower(kindArmy);
    const evilPower = getArmyPower(evilArmy);

    if (kindPower === evilPower) {
        console.log(PossibleResults.DRAW)
    } else if (kindPower > evilPower) {
        console.log(PossibleResults.GOOD);
    } else {
        console.log(PossibleResults.EVIL)
    }
}

battleForTheMiddleEarth(
    new ListOf(new Pair(KindArmy.ELF, 1)),
    new ListOf(new Pair(EvilArmy.TROLL, 1)))

battleForTheMiddleEarth(
    new ListOf(new Pair(KindArmy.ELF, 1), new Pair(KindArmy.HARFOOT, 1)),
    new ListOf(new Pair(EvilArmy.TROLL, 1)))

battleForTheMiddleEarth(
    new ListOf(new Pair(KindArmy.ELF, 1), new Pair(KindArmy.HARFOOT, 1)),
    new ListOf(new Pair(EvilArmy.TROLL, 1), new Pair(EvilArmy.ORC, 1)))

battleForTheMiddleEarth(
    new ListOf(new Pair(KindArmy.ELF, 56), new Pair(KindArmy.HARFOOT, 80), new Pair(KindArmy.DWARF, 5)),
    new ListOf(new Pair(EvilArmy.TROLL, 17), new Pair(EvilArmy.ORC, 51), new Pair(EvilArmy.WARG, 10), new Pair(EvilArmy.SOUTHERNER, 2)))


