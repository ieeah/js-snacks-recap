// crea un array di numeri interi
// somma tutti i suoi elementi che si trovano in una posizione dispari
// stampa a schermo

const numeri = [1, 3, 2, 6, 11, 30, 8, 20, 9, 0];
let somma = 0;
for (i = 0; i < 10; i++) {
    
    if (i % 2 !== 0) {
        somma += numeri[i];
    }

}

document.body.innerHTML = `il risultato della somma degli elementi dispari contenuti nell'array<h1>${somma}</h1>`;