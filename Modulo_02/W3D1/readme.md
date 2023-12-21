Epicode - M2 - Programming Foundations: W3D1 Practice

# Javascript Basis

## ESERCIZI SULLE FUNZIONI: 

### ESERCIZIO 1
Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.


~~~javascript
function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}
~~~

### ESERCIZIO 2
Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.


~~~javascript
function boundary(num) {
    if (num === 400) {
        return true;
    } else if (num >= 20 && num <= 100) {
        return true;
    } else {
        return false;
    }
}
~~~

### ESERCIZIO 3
Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).


~~~javascript
function reverseString(string) {
    return string.split('').reverse().join('');
}
~~~

### ESERCIZIO 4
Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.


~~~javascript
function upperFirst(sentence) {
    let sentenceSplitted = sentence.split(' ');
    let arrayUpperFirst = sentenceSplitted.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    });
    return arrayUpperFirst.join(' ');
}
~~~

### ESERCIZIO 5
Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.


~~~javascript
function giveMeRandom(n) {
    let randomNumbList = [];
    for (i = 0; i < n; i++) {
        randomNumbList.push(Math.floor(Math.random() * 10));
    }
    return randomNumbList;
}
~~~

## EXTRA:

### ESERCIZIO 1
Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.


~~~javascript
function area(l1, l2) {
    return l1 * l2;
}
~~~

### ESERCIZIO 2
Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.


~~~javascript
function crazyDiff(number) {
    result = Math.abs(number - 19);
    if (result > 19) {
        return result * 3;
    } else {
        return result
    }
}
~~~

### ESERCIZIO 3
Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.


~~~javascript
function codify(string) {
    if (string.includes(' ') === true) {
        return 'please insert only one word'
    } else {
        if (string === 'code') {
            return string;
        } else {
            let codedString = 'code' + string;
            return codedString;
        }
    }
}
console.log(codify('saturno'))
~~~

### ESERCIZIO 4
Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
SUGGERIMENTO: operatore modulo


~~~javascript
function check3and7(numb) {
    if (numb < 0) {
        return 'please insert a positive number';
    } else {
        if (numb % 3 === 0 || numb % 7 === 0) {
            return true;
        } else {
            return false;
        }
    }
}
~~~

### ESERCIZIO 5
Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.


~~~javascript
function cutString(string) {
    let arrayString = string.split('');
    arrayString.pop();
    arrayString.shift();
    return arrayString.join('')
}
~~~
