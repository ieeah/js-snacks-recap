// generatore di "nomi cognomi" casuali
// prendendo una lista di nomi ed una di cognomi
// Generare una lista di tre invitati

const nomi = ['Paolo', 'Marco', 'Giulia', 'Federico', 'Ajeje', 'Cesarina', 'Ennio'];
const cognomi = ['Duzioni', 'Cuccureddu', 'Calcaterra', 'Stirpelli', 'Brazorf', 'Sarrapanigghi', 'Annio'];

let index1 = Math.floor(Math.random() * 7);
let index2 = Math.floor(Math.random() * 7);

document.body.innerHTML = '<h1>i tre invitati sono';
for (let i = 1; i < 4; i++) {
    index1 = Math.floor(Math.random() * 7);
    index2 = Math.floor(Math.random() * 7);
    const invitato = `${nomi[index1]} ${cognomi[index2]}`;
    document.body.innerHTML += ' ' + '<h4>' + invitato + '</h4>';
    console.log(invitato);

}

document.body.innerHTML += '</h1>';