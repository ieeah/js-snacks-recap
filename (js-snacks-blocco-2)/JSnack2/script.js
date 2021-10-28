// inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

let numero = parseInt(prompt('Inserisci un numero pari'));


    while (isNaN(numero)) {
        numero = parseInt(prompt('Inserisci un numero par per continuare'));
}


if (numero % 2 === 0) {
    document.body.innerHTML = `hai inserito il numero ${numero}`;
} else if (numero % 2 !== 0) {
    document.body.innerHTML = `hai inserito un numero dispari, il numero pari successivo è ${numero + 1}`;
}