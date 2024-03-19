// JavaScript - basics
// console.log("Vaša majka")
// za imenovanje(mapiranje varijable) koristimo keyword let
/*
let total = 0;
let count = 1;

while(count<=10) { // ovo zbraja 1+2+3+4+5+6+7+8+9+10
  total += count;
  count += 1;
}

console.log(total);
*/
// slično kao print(sum(range(11))) u Pythonu
//console.log([...Array(11).keys()].reduce((a,b)=> a + b, 0));
/*Array(11): Stvara novi prazni niz s 11 mjesta. Ovo stvara niz s 11 undefined elemenata.

.keys(): Metoda koja vraća novi objekt koji sadrži ključeve ili indekse elemenata niza kao iterator. Za ovaj primjer, to će biti iterator koji generira brojeve od 0 do 10.

[...Array(11).keys()]: Ovo pretvara iterator ključeva u običan niz, koristeći spread operator .... Kao rezultat, dobivamo niz brojeva od 0 do 10.

.reduce((a, b) => a + b, 0): Metoda reduce koristi se za reduciranje niza u jednu vrijednost, primjenjujući funkciju akumulatora na svaki element niza. U ovom slučaju, funkcija akumulatora je (a, b) => a + b, što znači da će se svi elementi niza zbrojiti. Početna vrijednost akumulatora je 0 (proslijeđeno kao drugi argument metode reduce). Dakle, ova metoda izračunava zbroj svih brojeva u nizu.*/

// RUŽNI JS PRIMJERI
//console.log(0.1+0.2); // 0.30000000000000004
//console.log(0.1+0.2===0.3); // false
// x = 1.000000000001
// x === 1 // ovo daje true
//console.log(16 == [16]) // true -> array se prvo interno pretvori u string pa u broj
//console.log(16 == [1,6]) // false
//console.log("1,6" == [1,6]) // true
/*var arr = [];
arr.length // -> 0 (prazan je)
arr[3] // undefined (nema elementa, ali ne dobimo error)
arr[3] = "hi";// moremo postavit neovisno ča ne postoji drugi element
console.log(arr.length); //4
console.log(arr["3"]); // hi
*/
// Vježbanje 1)
// Modificirati kod tako da se uvede dodatno mapiranje(varijabla) koja će poopćiti problem i pokazivati koliko brojeva treba zbrojiti (npr. n = 10 ili n = 1000)
/*let total = 0;
let count = 1;

while(count<=10) { // ovo zbraja 1+2+3+4+5+6+7+8+9+10
  total += count;
  count += 1;
};
*/
/*
let total = 0;
let count = 1;
let n = 50; // Definiramo varijablu n koja predstavlja koliko brojeva treba zbrojiti

while (count <= n) { // iterirat ćemo kroz sve brojeve, zbrajat ih i brojat kroz kolike smo iterirali i to sve dok ne dojdemo do n
  total += count;
  count += 1;
}

console.log(`Suma prvih ${n} brojeva je:`, total);

*/
/*
NPM:

Osnovni alat za upravljanje paketima u Node.js ekosustavu.
Ugrađen u Node.js, stoga ga ne morate posebno instalirati.
Dolazi s Node.js instalacijom kao zadani paketni upravitelj.
Omogućuje instalaciju, upravljanje i ažuriranje paketa, kao i upravljanje ovisnostima u projektima.
Koristi centralni registar paketa npmjs.com kao izvor paketa.
Nudi širok raspon funkcionalnosti, uključujući skripte, verzioniranje, upravljanje skriptama, itd.
Imajte na umu da je brzina instalacije paketa ponekad problematična s npm-om, posebno kod velikih projekata s mnogo ovisnosti.
Yarn:

Alternativa npm-u, razvijena od strane Facebooka, koja nudi poboljšanja u performansama, sigurnosti i pouzdanosti.
Može se koristiti kao zamjena za npm, a ima i svoj vlastiti CLI.
Nudi bržu instalaciju paketa i paralelno preuzimanje ovisnosti, što ga čini bržim od npm-a u mnogim slučajevima.
Koristi isti registar paketa kao i npm (npmjs.com), tako da možete koristiti iste pakete.
Ima mogućnost kreiranja "lock" datoteke (Yarn.lock) koja osigurava determinističke instalacije paketa na različitim okolinama.
Nudi alate za rješavanje problema s ovisnostima i upravljanje sigurnosnim ranjivostima.
Iako Yarn nije ugrađen u Node.js, možete ga lako instalirati pomoću npm-a ili direktne preuzimanjem binarne datoteke.

*/
/*
// Program za zbrajanje prvih n brojeva pomoću samo 1 varijable
const n = 10; // Definiramo broj n

// Izračun zbroja prvih n brojeva pomoću Gaussove formule
const suma = (n * (n + 1)) / 2;

// Ispis rezultata
console.log(`Zbroj prvih ${n} brojeva je:`, suma);
*/