// funkcije
/*const kvadriraj = function(x){
  return x*x;
}
let a = kvadriraj(12);
console.log(a);

const ispisi = function () { // nema povratni tip, ali izvršava neku radnju
  console.log("ŠKORIČ");
};

ispisi();
*/
// let i const su lokalne u funkciji, a var će se vidit i van funkcije
/*let x = 10;
if(true){
  let y = 20;
  var z = 30;
  console.log(x+y+z);
}
console.log(x+z); // z je vidljiv jer je incijaliziran sa var
*/
// u svakom bloku dostupne su varijable iz prethodnog bloka ako su imena različita

const halve = function(n){
  return n /2;
};
let n = 10;
console.log(halve(100)); // 50
console.log(n); // 10

// Ugnježdeni blokovi (vidimo trenutni blok i njegov parent blok)
const mix = function(udio) {
  const sastojak = function (kolicina, mjera, naziv) {
    let stvarnaKolicina = kolicina * udio;
    console.log(`${bullet} ${stvarnaKolicina} ${mjera} ${naziv}`);
  };
  sastojak(1, "limenka", "ananasa");
  sastojak(0.25, "šalica", "šećera");
  sastojak(0.25, "šalica", "limunovog soka");
};

var bullet = " * ";
mix(0.5); 
mix(0.1);
// dobijemo liste sastojaka

// Kraća verzija
var a = kvadriraj(5);
function kvadriraj(x){
  return x*x;
};

// Još kraći oblik sa strelicama
const potenciraj = (baza, eksponent) => {
 let rezultat = 1;
 for (let brojac = 0; brojac < eksponent; brojac++) {
 rezultat *= baza;
 }
 return rezultat;
};
console.log( potenciraj(2, 4) );
// Za onelinere nam ne treba return
const kvadrat = (x) => { return x*x }; // dulji oblik
const kvadrat_jos_krace = x => x * x; // kraći oblik
kvadrat(7);
// ako nema parametara, idu prazne zagrade
const javise = () => {
 console.log("Hello!");
};

javise();
// Ako funckiji zadamo višak argumenata, oni se ignoriraju
function kvadriraj(x) { return x * x; }
console.log(kvadriraj(4, true, "nesto_trece"));
// Vrijedi i obrnuto, ukoliko funkcija sadrži više parametara od broja paramatera koji su proslijeđeni u pozivu, oni će biti undefined . 
function minus(a, b) {
 if (b === undefined) return -a;
 else return a - b;
}
console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
// Možemo parametru dati i default
function potenciraj_2(baza, eksponent = 2) {
 let rezultat = 1;
 for (let brojac = 0; brojac < eksponent; brojac++) {
 rezultat *= baza;
 }
 return rezultat;
}
console.log(potenciraj(4));
// → 16
console.log(potenciraj(2, 6));
// → 64


// Funkcija koja prima 2 argumenta i vraća manji
function min(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return 'Jednaki';
  }
}

console.log(min(0, 4));   // Ispisat će: 0
console.log(min(0, -4));  // Ispisat će: -4
console.log(min(3, 3));   // Ispisat će: 'Jednaki'

// Funkcija koja vraća najveći niz uzastopnih istih znakova u stringu
function istiZnakovi(str) {
  let maxCount = 0;
  let currentCount = 1;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      currentCount++;
    } else {
      maxCount = Math.max(maxCount, currentCount);
      currentCount = 1;
    }
  }

  return Math.max(maxCount, currentCount);
}

console.log(istiZnakovi("baaaccd")); // Ispisat će: 3
console.log(istiZnakovi("ba2dll"));  // Ispisat će: 2

function ackermann(m, n) {
  if (m === 0) {
    return n + 1;
  } else if (m > 0 && n === 0) {
    return ackermann(m - 1, 1);
  } else if (m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1));
  }
}

// Primjeri poziva Ackermannove funkcije
console.log(ackermann(1, 2)); // Ispisat će: 4
console.log(ackermann(3, 4)); // Ispisat će: 125


