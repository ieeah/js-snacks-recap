// con due prompt l'utente inserisce due parole, in console printiamo prima la parola più corta, poi la più lunga


const parola1 = prompt('inserisci una parola');
const parola2 = prompt('inserisci un\'altra parola');

if (parola1.length > parola2.length) {
    document.body.innerHTML = `<h1>${parola2} - ${parola1}</h1>`;
} else if (parola1.length < parola2.length) {
    document.body.innerHTML = `<h1>${parola1} - ${parola2}</h1>`;
} else {
    document.body.innerHTML = `<h1>${parola1} e ${parola2} hanno la stessa lunghezzza</h1>`;
}