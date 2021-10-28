//per 5 volte si richiede un numero all'utente
//il programma stampa la somma di tutti i numeri inseriti



let tot = 0;

// con il ciclo for
for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt('inserisci un numero'));
    tot += num;
}

document.body.innerHTML = `<h1>${tot}</h1>`;


// con while
// let count = 1;
// while (count < 6) {
//     let num = parseInt(prompt('inserisci un numero'));
//     tot += num;
//     count++;
// }

// document.body.innerHTML = `<h1>${tot}</h1>`;