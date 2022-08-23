const question_1 = prompt("Quanti chilometri vuole percorrere?");
const question_1AsNumber = parseInt(question_1);
console.log("question_1AsNumber", question_1AsNumber);
let chilometri = question_1AsNumber;

const question_2 = prompt("Quanti anni hai?");
const question_2AsNumber = parseInt(question_2);
console.log("question_2AsNumber", question_2AsNumber);
let anni = question_2AsNumber;


const prezzo_km = 0.21;
const sconto_minorenni = 0.2;
const sconto_over65 = 0.4;

if (anni >= 65) {
    const prezzo_biglietto = chilometri * prezzo_km * (1 - sconto_over65);
    const risposta = `Il tuo prezzo del biglietto è ${prezzo_biglietto}€`;
    document.getElementById("mio_id").innerHTML = risposta;
}
else if (anni < 18) {
    let prezzo_biglietto = chilometri * prezzo_km * (1 - sconto_minorenni);
    let risposta = `Il tuo prezzo del biglietto è ${prezzo_biglietto}€`;
    document.getElementById("mio_id").innerHTML = risposta;
}
else if ((anni < 65) && (anni >= 18)) {
    let prezzo_biglietto = chilometri * prezzo_km;
    let risposta = `Il tuo prezzo del biglietto è ${prezzo_biglietto}€`;
    document.getElementById("mio_id").innerHTML = risposta;
}


// const text = prompt('Quando sei nato?');
// const textAsNumber = parseInt(text);
// console.log('textAsNumber', textAsNumber);
// const anni = 2022 - textAsNumber;

// const risposta = `la tua età è ${anni}`;

// console.log(anni);

// if (isNaN(textAsNumber)) {
//     // blocco di istruzioni 1
//     document.getElementById('mio_id').innerHTML = 'non hai inserito un numero';
// } else {
//     // blocco di istruzioni 2
//     document.getElementById('mio_id').innerHTML = risposta;
// }