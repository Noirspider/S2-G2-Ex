/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let x = 5;
  let y = 4;

  if (x > y) {
    console.log(" il numero più grande è " + x);
  } else if (y > x) {
    console.log(" il numero più grande è " + y);
  } else {
    console.log("I numeri sono uguali");
  }
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let numero = 6;
  if (numero !== 5) {
    console.log("not equal");
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let numero = 10;
  if (numero % 5 === 0) {
    console.log("divisibile per 5");
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let numero1 = 5;
  let numero2 = 3;

  if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8 || numero2 - numero1 === 8) {
    console.log("Uno dei numeri è 8 o la loro addizione/sottrazione è uguale a 8");
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// da controllare probabilmente sbagliato
{

  let totalShoppingCart = 60;
  let costoSpedizione = 10;
  let totaleDaPagare = totalShoppingCart;

  if (totalShoppingCart < 50) {
    totaleDaPagare += costoSpedizione
}
console.log('totale da pagare ' + totaleDaPagare)
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{

  let totalShoppingCart = 60;
  let costoSpedizione = 10;
  let totaleDaPagare = totalShoppingCart;
  let totalShoppingCart2 = totaleDaPagare*0.8 ;
  let totaleDaPagare2 = totalShoppingCart2;


  if (totalShoppingCart2 < 50) {
    totaleDaPagare2 += costoSpedizione
}
console.log('totale da pagare ' + totaleDaPagare2)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let numero1 = 25;
  let numero2 = 15;
  let numero3 = 40;

  if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
      console.log(numero1, numero2, numero3);
    } else {
      console.log(numero1, numero3, numero2);
    }
  } else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
      console.log(numero2, numero1, numero3);
    } else {
      console.log(numero2, numero3, numero1);
    }
  } else {
    if (numero1 >= numero2) {
      console.log(numero3, numero1, numero2);
    } else {
      console.log(numero3, numero2, numero1);
    }
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  let valore = "42"; 

  if (typeof valore === "number") {
    console.log(valore + " è un numero.");
  } else {
    console.log(valore + "  è una stringa.");
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let numero = 7;

  if (numero % 2 === 0) {
    console.log(numero + " è un numero pari.");
  } else {
    console.log(numero + " è un numero dispari.");
  }
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
{
  let val = 7;

  if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  const myArray = []; // Crea un array vuoto

  let number = 1;

  if (number <= 10) {
    myArray.push(number);
    number++;
  }

  if (number <= 10) {
    myArray.push(number);
    number++;
  }

  if (number <= 10) {
    myArray.push(number);
    number++;
  }

  if (number <= 10) {
    myArray.push(number);
    number++;
  }

  if (number <= 10) {
    myArray.push(number);
    number++;
  }

  if (number <= 10) {
    myArray.push(number);
    number++;
  }

  if (number <= 10) {
    myArray.push(number);
    number++;
  }

  if (number <= 10) {
    myArray.push(number);
    number++;
  }

  if (number <= 10) {
    myArray.push(number);
    number++;
  }

  if (number <= 10) {
    myArray.push(number);
    number++;
  }

console.log(myArray);
}
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArray[9] = 100;
  console.log(myArray);
}