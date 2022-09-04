/*
 * Reto #26
 * CUADRADO Y TRIÁNGULO 2D
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 *
 */

enum PolygonType {
    SQUARE,
    TRIANGLE,
    DIAMOND
}

const drawSquare = (sideSize: number): void => {
    const output = new Array(sideSize).fill("*").join(" ");
    for (let i = 0; i < sideSize; i++) {
        console.log(`${output}`)
    }
}

const drawTriangle = (sideSize: number): void => {

    for (let i=1; i <= sideSize; i++) {
        let output = new Array(i).fill("*").join(" ");
        console.log(output)
    }
}

const drawDiamond = (sideSize: number): void => {
    drawTriangle(sideSize)
    const output = new Array(sideSize).fill("*");
    for (let i=0; i < sideSize; i++) {
        output[i] = " "
        console.log(output.join(" "))
    }
}

const drawPolygon = (sideSize: number, type: PolygonType) => {
    if (sideSize < 2) throw new Error("Size has to be greater or equal to 2");

    switch (type){
        case PolygonType.SQUARE:
            drawSquare(sideSize);
            break;
        case PolygonType.TRIANGLE:
            drawTriangle(sideSize)
            break;
        case PolygonType.DIAMOND:
            drawDiamond(sideSize);
            break;
    }
    
    console.log("")
}

drawPolygon(10,PolygonType.SQUARE)
drawPolygon(15,PolygonType.TRIANGLE)
drawPolygon(12,PolygonType.DIAMOND)