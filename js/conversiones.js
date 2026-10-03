/** Funciones que convierten: 
 * grados Celcius a grados Fahrenheit
 * grados Celcius a grados Kelvin  */


export function convierteCelsiusaFahrenheit (celsisus) {
    return (celsisus * 1.8) + 32;

}

export function convierteCelsiusaKelvin (celsisus) {
    return celsisus + 273.15;

}
