/*
 * Reto #31
 * AÑOS BISIESTOS
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que imprima los 30 próximos años bisiestos siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */


const thirtyLeapYears = (startingYear: number) => {
    let currentYear = startingYear++;
    let yearsCount = 0;

    while (yearsCount < 30) {
        if (currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0)) {
            console.log(currentYear)
            yearsCount++;
        }
        currentYear++;
    }
}

thirtyLeapYears(1999)
thirtyLeapYears(-500)