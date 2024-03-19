
/*// JS - vrijednosti tipovi i operatori

// Cijeli brojevi
//Imamo tip podataka number, ali moremo koristit univerzalni tip let
// decimalni brojevi koriste isključivo točku
//console.log(3.23e55)

// Aritmetika (binarni operatori)
// * + - / () %
// infinity, - Infinity
// NaN (not a number...npr. 0/0) => tip njoj je i dalje number :)

// 3 načina za string
/*"lie on the ocean"
'float on the ocean'
`down at the sea`*/
// U pravilu dvostruki navodnik osim ako nam specifično ne trebaju "" u stringu
// Ili koristimo drugi znak za navodnike ili \ za escapeing
//console.log('Idemo u "Grimaldu"');
//console.log("O kvrapcu, samo ne u \"Grimaldu\".");

// String može sadržavati specijalne znakove poput oznake novog reda \n ili tabulator \a
// konkatenacija stringa; operator + ("a""+"b"+"c")
// ako je string omeđen s backtickovima podržava unošenje  JS izraza u njega
// console.log(`Polovica od 100 je ${100/2}`)
/*
// Unarni operatori (iza njih sljedi samo 1 argument)
// typeof i  - 
console.log(typeof "neki_string"); //-> "string"
console.log(typeof 4); // -> "number"
console.log(typeof NaN); // -> "number"
console.log(typeof typeof Nan); // -> "string" (riječ number je string)
console.log(3>2); // true
console.log("b" > "a") // true
console.log( true || false) // true
console.log(false&&true) // false

// ternarni operator(odnos između 3 vrijednosti)
console.log(true ? 1: 2) // 1 (prva stvar pole ? je za true, druga za false)
console.log(false ? 1: 2) // 2
console.log(1234 > 23 ? "a" : "b") // a
console.log(2<1 ? "a":"b") // b

// type correction (ako sjebemo tipove podataka i delamo gluposti)
console.log(12*null) // 0
console.log("5"-4) //1
console.log("5"+1) // 51
console.log(5+"1") // "51"
console.log("five"*2) // NaN
console.log(false == 0) // true

// Neke stvari automatski idu u True i False
// povratni tip logičkih operatora && i || -> ne vraćaju strogo true ili false
// || vraća lijevu vrijednost ukoliko se može pretvoriti u true, a u protivnom vraća desnu vrijednost neovisno što ona bila
// && vraća lijevu vrijednost ako se može pretvoriti u false, a u protivnom vraća desnu vrijednost
*/
// zadaci
/*
const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Unesi prvi broj: "));
let b = parseFloat(prompt("Unesi drugi broj: "));
let c = parseFloat(prompt("Unesi treći broj: "));
let d = parseFloat(prompt("Unesi četvrti broj: "));

let maks;

if (a > b && a > c && a > d) {
  maks = a;
} else if (b > a && b > c && b > d) {
  maks = b;
} else if (c > a && c > b && c > d) {
  maks = c;
} else if (d > a && d > b && d > c) {
  maks = d;
}

console.log("Najveći je: " + maks);
*/
/*
const prompt = require('prompt-sync')();

const bodovi = parseFloat(prompt("Unesite broj bodova: "));

let ocjena;
if (bodovi >= 0 && bodovi < 50) {
  ocjena = 1;
} else if (bodovi >= 50 && bodovi < 64) {
  ocjena = 2;
} else if (bodovi >= 64 && bodovi < 75) {
  ocjena = 3;
} else if (bodovi >= 75 && bodovi < 90) {
  ocjena = 4;
} else if (bodovi >= 90) {
  ocjena = 5;
} 

console.log("Ocjena:", ocjena);
*/