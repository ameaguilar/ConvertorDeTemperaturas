import { convierteCelsiusaFahrenheit, convierteCelsiusaKelvin } from "./conversiones.js";
import { validaInput } from "./validaciones.js";
import promptSync from "prompt-sync";

/** Método main */

const prompt = promptSync();
const input = prompt("Ingresa el valor de la temperatura en Celsius:");

if (!validaInput(input)) {
    console.log("Ingresa un número válido");  //validacion
} else {

    let fahrenheit = convierteCelsiusaFahrenheit(input);
    let kelvin = convierteCelsiusaKelvin(input);

    console.log(`${input} grados C equivalen a ${fahrenheit.toFixed(3)} grados F y a
                     ${kelvin.toFixed(3)} grados C`);
}

