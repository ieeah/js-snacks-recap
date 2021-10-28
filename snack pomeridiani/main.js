// Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
//Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.
const btn = document.querySelector('button');


let number = '';
let somma = 0;
let media = 0;

btn.addEventListener('click', function () {
    number = prompt('inserisci un numero di quattro cifre');

    while ((number.length > 4) || (number.length < 4) || (isNaN(number))) {
        number = prompt('inserisci un numero di quattro cifre');
    }

    for (let i = 0; i < number.length; i++ ) {
        somma += parseInt(number[i]);
        console.log(parseInt(number[i]));
    }

    media = somma / number.length;

    // let realNumber = parseInt(number);
    // let n1 = parseInt(number[0]);
    // let n2 = parseInt(number[1]);
    // let n3 = parseInt(number[2]);
    // let n4 = parseInt(number[3]);

    document.body.innerHTML = `<h3>la somma delle singole cifre del tuo numero è${somma}.</h3>
    <h3>la media della somma delle cifre del tuo numero è${media}.</h3>`;

});