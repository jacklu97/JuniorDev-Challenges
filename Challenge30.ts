/*
 * Reto #30
 * MARCO DE PALABRAS
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba un texto y muestre cada palabra en una línea, formando
 * un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

const drawFrame = (text: String): void => {
    const modifiedText = text.split(" ").filter(word => word !== '');
    const longestSize = modifiedText.reduce((a, b) => a.length > b.length ? a : b, "").length;
    const border = new Array(longestSize + 4).fill("*").join("");
    console.log(border);
    modifiedText.map(word => word + " ".repeat(longestSize - word.length)).forEach(word => console.log(`* ${word} *`))
    console.log(border);
}

drawFrame("¿Qué te parece el reto?")
drawFrame("¿Qué te     parece el reto?")
drawFrame("¿Cuántos retos de código de la comunidad has resuelto?")
drawFrame("En este reto, usé dos formas de poder hacer lo mismo pero con distintos métodos.")