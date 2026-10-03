/** Validaciones para el tipo de datos
 * Tiene que ser un número y no estar vacío.
 */

export function esValorVacio(valor) {
    if (typeof valor === "number") {   //typeof permite saber qué tipo de dato tenemos
        return false;                  //no está vacío 
    } else if (typeof valor === "string" && valor.trim() !== "") {  //pregunta si es un texto
        return false;
    } else {
        return true;
    }
}

export function esNumero(valor) {
    if (esValorVacio(valor)) {
        return false;
    } else if (isNaN(valor)) {
        return false;
    } else {
        return true;
    }
}

// Función que valida el input combinando las anteriores

export function validaInput(valor) {
    if (esValorVacio(valor)) {
        return false;
    } else if (!esNumero(valor)) {
        return false;
    } else {
        return true;
    }
}