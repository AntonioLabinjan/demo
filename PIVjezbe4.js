let listaBrojeva = [2, 34, 12, 11, 11, 11, 0];
console.log(listaBrojeva[0]); // 2
console.log(listaBrojeva[2]); // 12
console.log(listaBrojeva[100]); // undefined

// toString - pretvara podatke u string
// length - vraća duljinu niza ili stringa

/*let a = 5;
console.log(a.toString());
let b = "javascript";
console.log(b.length);
*/
// možemo pristupati i s uglatim zagradama
let a = 5;
console.log(a["toString"]());
let b = "javascript";
console.log(b["length"]);
console.log(b["len" + "gth"]);
let svojstvo = "length";
console.log(b[svojstvo])
// 5,10,10,10

//  ukoliko unaprijed znamo ime svojstva koji nam je potreban lakše je pisati polje.length nego
/*polje["length"] . Međutim ako ne znamo unaprijed ime svojstva nego se ono određuje tijekom
izvođenja programa, onda koristimo uglate zagrade. Dodatno, svojstvo može sadržavati i nedozvoljene
znakove za imenovanje varijabli. U tom slučaju također koristimo uglate zagrade.*/
/*
let varijabla = {};
varijabla["svojstvo s razmakom"] = "tu sam";
varijabla.svojstvo s razmakom // Greška! */

// DZ
//Ovo mi nema smisla sve prepisivat...samo ću riješit zadaće
// jeli moguće rekurzivno postaviti objekt kao svojstvo tog istog objekta.
/*let a = {
 naziv: "neki objekt"
};
a.unutarnji = a;
console.log(a.unutarnji.unutarnji.unutarnji.naziv);
*/
// MOguće je, ali ni baš pametno jer moremo napravit rekurzivni infinite loop
//Sastavi listu od 10 studenata sa sljedećim svojstvima: ime , prezime , upisan
//(Boolean true / false ). Vrijednosti svojstava proizvoljno odaberi. Sastavi //funkciju
//provjeri(lista, pojam) koja vraća true ukoliko postoji student na lista čije ime ili
//prezime je baš pojam , a upisan je
// Funkcija koja provjerava postoji li student na listi čije ime ili prezime odgovara traženom pojmu i koji je upisan
function provjeri(lista, pojam) {
  for (let student of lista) {
    if ((student.ime === pojam || student.prezime === pojam) && student.upisan) {
      return true;
    }
  }
  return false;
}

// Stvaranje liste od 10 studenata
const listaStudenata = [
  { ime: "Ana", prezime: "Anić", upisan: true },
  { ime: "Ivan", prezime: "Ivanić", upisan: false },
  { ime: "Petra", prezime: "Petrović", upisan: true },
  { ime: "Marko", prezime: "Markić", upisan: true },
  { ime: "Jana", prezime: "Janjić", upisan: false },
  { ime: "Luka", prezime: "Lukić", upisan: true },
  { ime: "Ema", prezime: "Emić", upisan: false },
  { ime: "Filip", prezime: "Filipović", upisan: true },
  { ime: "Mia", prezime: "Mijić", upisan: true },
  { ime: "Matej", prezime: "Matejić", upisan: false }
];

// Testiranje funkcije
console.log(provjeri(listaStudenata, "Ana"));   // true
console.log(provjeri(listaStudenata, "Ivanić"));  // false
console.log(provjeri(listaStudenata, "Petra"));  // true
console.log(provjeri(listaStudenata, "Luka"));   // true
console.log(provjeri(listaStudenata, "Ivan"));   // false

// Funkcija koja provjerava postoji li student na listi čije ime ili prezime sadrži traženi pojam i status upisa
function provjeri(lista, pojam, status) {
  for (let student of lista) {
    if ((student.ime.toLowerCase().includes(pojam.toLowerCase()) || student.prezime.toLowerCase().includes(pojam.toLowerCase())) && student.upisan === status) {
      return true;
    }
  }
  return false;
}

// Stvaranje liste od 10 studenata
const listaStudenata_2 = [
  { ime: "Ana", prezime: "Anić", upisan: true },
  { ime: "Ivan", prezime: "Ivanić", upisan: false },
  { ime: "Petra", prezime: "Petrović", upisan: true },
  { ime: "Marko", prezime: "Markić", upisan: true },
  { ime: "Jana", prezime: "Janjić", upisan: false },
  { ime: "Luka", prezime: "Lukić", upisan: true },
  { ime: "Ema", prezime: "Emić", upisan: false },
  { ime: "Filip", prezime: "Filipović", upisan: true },
  { ime: "Mia", prezime: "Mijić", upisan: true },
  { ime: "Matej", prezime: "Matejić", upisan: false }
];

// Testiranje funkcije
console.log(provjeri(listaStudenata, "an", true));   // true, Ana Anić
console.log(provjeri(listaStudenata, "ivan", false));  // true, Ivan Ivanić
console.log(provjeri(listaStudenata, "Pet", true));  // true, Petra Petrović
console.log(provjeri(listaStudenata, "uka", true));   // true, Luka Lukić
console.log(provjeri(listaStudenata, "jan", false));   // true, Jana Janjić
console.log(provjeri(listaStudenata, "EMA", false));   // true, Ema Emić
console.log(provjeri(listaStudenata, "l", true));   // true, Luka Lukić
console.log(provjeri(listaStudenata, "Matej", false));   // true, Matej Matejić
console.log(provjeri(listaStudenata, "Mia", false));   // false, student nije upisan
console.log(provjeri(listaStudenata, "ana", true));   // false, student nije upisan
// Nešto s zagradama (koristimo stog)
function zagrade(s) {
  const stack = [];

  // Mapiranje otvorenih i zatvorenih zagrada
  const bracketsMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      // Ako je znak otvorena zagrada, stavimo ga na stog
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      // Ako je znak zatvorena zagrada, provjerimo je li odgovarajuća otvorena zagrada na vrhu stoga
      const lastBracket = stack.pop();
      if (lastBracket !== bracketsMap[char]) {
        return false; // Ako ne odgovara, zagrade nisu valjano ugniježdene
      }
    }
  }

  // Provjeravamo jesu li sve otvorene zagrade zatvorene
  return stack.length === 0;
}

console.log(zagrade("[()]()()"));     // → true
console.log(zagrade("{[((()))]}"));   // → true
console.log(zagrade("({)}"));         // → false
console.log(zagrade("([}]"));         // → false
console.log(zagrade("(]}{"));
console.log(zagrade("()"));

