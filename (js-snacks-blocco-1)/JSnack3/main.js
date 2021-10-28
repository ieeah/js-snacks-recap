// crea un array vuoto
// chiedi sei numeri all'utente
// se sono dispari inseriscile nell'array altrimenti ignorali
// stampa dei numeri inseriti nell'array

const wewe = [];

for (let i = 1; i < 7; i++) {
    let num = parseInt(prompt('inserisci un numero'));

    if (num % 2 !== 0) {
        wewe.push(num);
    }

    document.body.innerHTML = `<h1>i numeri inseriti nell' array sono: ${wewe}</h1>`;
}