const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

function Cifrado() {
    const textoIngresado = texto.value;
    textoCifrado.value = textoIngresado
        .split('')
        .map(c => {
            let mayus = c === c.toUpperCase();
            let valorEntero = c.charCodeAt(0);
            if (valorEntero >= 65 && valorEntero <= 90) {
                valorEntero = ((valorEntero - 65 + parseInt(desplazamiento.value)) % 26) + 65;
            } else if (valorEntero >= 97 && valorEntero <= 122) {
                valorEntero = ((valorEntero - 97 + parseInt(desplazamiento.value)) % 26) + 97;
            } else if (valorEntero >= 48 && valorEntero <= 57) {
                valorEntero = ((valorEntero - 48 + parseInt(desplazamiento.value) + 10) % 10) + 48;
            }
            return String.fromCharCode(valorEntero);
        })
        .join('');
}

texto.addEventListener("input", Cifrado);

function Descifrado() {
    const textoCifradoIngresado = textoCifrado.value;
    texto.value = textoCifradoIngresado
        .split('')
        .map(c => {
            let mayus = c === c.toUpperCase();
            let valorEntero = c.charCodeAt(0);
            if (valorEntero >= 65 && valorEntero <= 90) {
                valorEntero = ((valorEntero - 65 - parseInt(desplazamiento.value) + 26) % 26) + 65;
            } else if (valorEntero >= 97 && valorEntero <= 122) {
                valorEntero = ((valorEntero - 97 - parseInt(desplazamiento.value) + 26) % 26) + 97;
            } else if (valorEntero >= 48 && valorEntero <= 57) {
                valorEntero = ((valorEntero - 48 - parseInt(desplazamiento.value) + 10) % 10) + 48;
            }
            return String.fromCharCode(valorEntero);
        })
        .join('');
}

textoCifrado.addEventListener("input", Descifrado);

