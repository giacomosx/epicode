Epicode - M2 - Programming Foundations: W2D1 Practice

# Javascript Basis

## ESERCIZI SUGLI IF: 

### ESERCIZIO 1
Scrivi un algoritmo per trovare il più grande tra due numeri interi.

~~~javascript  
function maxN(n1, n2) {
  if (n1 > n2) {
    return 'Il maggiore tra i due numeri è ' + n1 + '.';
  } else if (n2 > n1) {
    return 'Il maggiore tra i due numeri è ' + n2 + '.';
  } else {
    return 'I numeri sono uguali.';
  }
}
~~~  

### ESERCIZIO 2
Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

- num < 5 - mostra in console "Tiny"
- num < 10 - mostra in console "Small"
- num < 15 - mostra in console "Medium"
- num < 20 - mostra in console "Large"
- num >= 20 - mostra in console "Huge"

~~~javascript  
function getSize(num) {
  if (num < 5) {
    return 'Tiny';
  } else if (num < 10) {
    return 'Small';
  } else if (num < 15) {
    return 'Medium';
  } else if (num < 20) {
    return 'Large';
  } else if (num >= 20) {
    return 'Huge';
  } else {
    return 'Please enter a correct value.';
  }
}
~~~

## ESERCIZI SUI CICLI: 

### ESERCIZIO 3
Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").

~~~javascript  
for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  }
  console.log(i);
}
~~~

### ESERCIZIO 4
Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.

~~~javascript  
for (let index = 0; index <= 15; index++) {
  if (index % 2 === 0) {
    console.log('Il numero ' + index + ' è pari.');
  } else {
    console.log('Il numero ' + index + ' è dispari.');
  }
}
~~~

## ESERCIZI EXTRA NON OBBLIGATORI

### ESERCIZIO EXTRA 1
Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.

~~~javascript  
function isItEight(num1, num2) {
  if (num1 === 8 || num2 === 8) {
    return 'Uno dei due numeri è 8';
  } else if (num1 + num2 === 8) {
    return 'Sommando i due numeri dati il risultato è 8';
  } else if (num1 - num2 === 8 || num2 - num1 === 8) {
    return 'Sottraendo i due numeri dati il risultato è 8';
  } else {
    return "Non esiste l'8.";
  }
}
~~~

### ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart". C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10). Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.

~~~javascript 
let totalShoppingCart = 30;

function shippingDiscount(totalCart) {
  const shippingCost = 10;

  if (totalCart >= 50) {
    return (
      'Il totale del tuo carrello è di euro ' +
      totalCart +
      '. Hai diritto alla spedizione gratuita.'
    );
  } else {
    return (
      'Il totale del tuo carrello è di euro ' +
      totalCart +
      '. Aggiungi ' +
      (50 - totalCart) +
      ' euro per ottenere la spedizione gratuita.\nAltrimenti pagherai ' +
      (totalCart + shippingCost) +
      ' euro con le spese di spedizione.'
    );
  }
}
~~~

### ESERCIZIO EXTRA 3
Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.

~~~javascript 
let totalShoppingCartBlack = 56;
let blackFriday = true;

function shippingBlack(totalCart) {
  const shippingCost = 10;

  if (blackFriday) {
    totalCart = (totalCart * 0.8).toFixed(2);
  }

  if (totalCart >= 50) {
    return (
      'Il totale del tuo carrello è di ' +
      Number(totalCart) +
      ' euro. Hai diritto alla spedizione gratuita.'
    );
  } else {
    let totalCosts = Number(totalCart) + Number(shippingCost);
    return (
      'Il totale del tuo carrello è di ' +
      Number(totalCart) +
      ' euro. Pagherai ' +
      totalCosts +
      ' euro con le spese di spedizione.'
    );
  }
}
~~~

### ESERCIZIO EXTRA 4
Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
Es. se isMale e' vero, il valore di gender deve essere "male"

~~~javascript 
let isMale = true;
let gender = isMale ? 'male' : 'female';
~~~ 

### ESERCIZIO EXTRA 5
Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".

~~~javascript
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz');
  } else if (num % 3 === 0) {
    console.log('Fizz');
  } else if (num % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(num);
  }
}
~~~