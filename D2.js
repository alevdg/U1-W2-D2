/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numA= 10
let numB= 15

console.log("numero a:",numA)
console.log("numero b:",numB)


if (numA > numB){
  console.log('numA + " è il numero più grande.')}
   else  (numA < numB) {
  console.log('numB + " è il numero più grande.')}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numC = 10;

if (numC !== 5) {
    console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numD = 10;

if (numD % 5 === 0) { 
    console.log("divisibile per 5")} //Se il resto della divisione di numD per 5 è uguale a 0 è perfettamente divisibile per 5 
    else (numD % 7 === 0){
      console.log("non è divisibile per 5")
    }


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 5;
let num2 = 3;

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
    console.log("vero"); // Num1 o Num 2 hanno il valore di 8 = vero , se la loro addizione o sottrazzione = 8 vero.
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
const shippingCost = 10;

if (totalShoppingCart > 50) {
    shippingCost = 0}
    else (totalShoppingCart < 50){
      shippingCost = 10}

let totalCheckout = totalShoppingCart + shippingCost;

console.log("Il totale da addebitare all'utente per il checkout è di " + totalCheckout + " euro.");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 100; 
const shippingCost = (totalShoppingCart > 50) ? 0 : 10;
const discount = 20;

let totalCheckout = totalShoppingCart - (totalShoppingCart * discount / 100) + shippingCost;

console.log("Il totale da addebitare all'utente per il checkout è di " + totalCheckout + " euro.");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const var1 = [1,2,3,4]
const var2 = [5,6,7]
const var3 = [8,9,10]
let numbersList = [var1,var2,var3]
numbersList.sort()
console.log(numbersList)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 5;
if (typeof num3 === "number") {
  console.log("Il valore è un numero");
} else {
  console.log("Il valore non è un numero");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
num3 = 5 //Se il num3=10 l'output del console.log sarebbe "il numero è pari"

if (num3 % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari"); //output: numero è dispari 
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
//il controllo per i numeri inferiori a 5 venga eseguito prima del controllo per i numeri inferiori a 10, il messaggio corretto verrà visualizzato in ogni circostanza.//


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto'
console.log('me', me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName // ho appena eliminato la proprietà "age" da person
console.log('me', me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
skills.pop() // elimina l'ultimo elemento
console.log('skills', skills)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numeri = [];// Crea un array vuoto chiamato "numeri"
for (let i = 1; i <= 10; i++) { //ciclo for per riempire l’array con i numeri da 1 a 10
  numeri.push(i); // Aggiunge il numero corrente all'array "numeri"
}
console.log(numeri);

/*let i = 1;: Questa riga dichiara una variabile chiamata “i” e la inizializza a 1. La variabile “i” viene utilizzata come contatore del ciclo.
i <= 10;: Questa condizione indica che il ciclo deve essere eseguito finché il valore della variabile “i” è minore o uguale a 10.
i++: Questa istruzione viene eseguita alla fine di ogni iterazione del ciclo e incrementa il valore della variabile “i” di 1.*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri[numeri.length - 1] = 100; // Sostituisce l'ultimo elemento dell'array con il valore "100"
console.log(numeri); // Visualizza l'array completo nella console