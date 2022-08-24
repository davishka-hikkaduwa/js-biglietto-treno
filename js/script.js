// const question_1 = prompt("Quanti chilometri vuole percorrere?");
// const question_1AsNumber = parseInt(question_1);
// console.log("question_1AsNumber", question_1AsNumber);
// let chilometri = question_1AsNumber;
// let risposta_1 = `Chilometri: ${chilometri}km`;
// document.getElementById("chilometri").innerHTML = risposta_1;


// const question_2 = prompt("Quanti anni hai?");
// const question_2AsNumber = parseInt(question_2);
// console.log("question_2AsNumber", question_2AsNumber);
// let anni = question_2AsNumber;
// let risposta_2 = `Anni: ${anni}`;
// document.getElementById("anni").innerHTML = risposta_2;

// CORREZIONE

const kmpercorso = parseInt(prompt("Quanti chilometri vuole percorrere?"));
let risposta_1 = `Chilometri: ${kmpercorso}km`;
document.getElementById("chilometri").innerHTML = risposta_1;

const anni = parseInt(prompt("Quanti anni hai?"));
let risposta_2 = `Anni: ${anni}`;
document.getElementById("anni").innerHTML = risposta_2;

if (!isNaN(kmpercorso) && !isNaN(anni)) {
    console.log("kmpercorso e anni sono numeri");

    // /CORREZIONE


    const prezzo_km = 0.21;
    const sconto_minorenni = 0.2;
    const sconto_over65 = 0.4;

    if (anni >= 65) {
        let prezzo_biglietto = kmpercorso * prezzo_km * (1 - sconto_over65);
        let risposta = `Il tuo prezzo del biglietto: ${prezzo_biglietto.toFixed(2)}€`;
        document.getElementById("prezzo").innerHTML = risposta;
    }
    else if (anni < 18) {
        let prezzo_biglietto = kmpercorso * prezzo_km * (1 - sconto_minorenni);
        let risposta = `Il tuo prezzo del biglietto: ${prezzo_biglietto.toFixed(2)}€`;
        document.getElementById("prezzo").innerHTML = risposta;
    }
    else if ((anni < 65) && (anni >= 18)) {
        let prezzo_biglietto = kmpercorso * prezzo_km;
        let risposta = `Il tuo prezzo del biglietto: ${prezzo_biglietto.toFixed(2)}€`;
        document.getElementById("prezzo").innerHTML = risposta;
    }


}
else {
    const datierrati = alert("dati inseriti in modo errato");
}