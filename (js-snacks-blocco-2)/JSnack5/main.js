// creare due array che hanno un numero diverso di elementi
// aggiungere elementi casuali all'array con meno elementi, finché entrambi gli array non hanno la stessa quantità di elementi


const maggiore = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const minore = [0, 1, 2, 3, 4, 5];
const body = document.body;

body.innerHTML = `<h3>maggiore, prima del ciclo ha ${maggiore.length} elementi.</h3>
<h3>minore, prima del ciclo ha ${minore.length} elementi.</h3>
`;


while (minore.length < maggiore.length) {
    minore.push(minore.length);
}

body.innerHTML += `<h3>maggiore, dopo il ciclo ha ${maggiore.length} elementi.</h3>
<h3>minore, dopo il ciclo ha ${minore.length} elementi.</h3>
`;

