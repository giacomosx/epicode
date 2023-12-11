/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.


Number: È un tipo di dato che rappresenta i numeri, sia decimali che interi;
String: Tipo di dati che rappresenta i caratteri alfabetici, per esempio testi, parole, nomi etc; 
Boolean: Questo tipo di dato può essere solo Vero (true) o Falso (false);
Null: Tipo di dato che si utilizza per rappresentare esplicitamente una variabile senza valore;
Undefined: Questo tipo di dato rappresenta una variabile a cui non è ancora stato assegnato un valore ma che comunque è stata dichiarata.
Array: È un insieme di dati, anche di diverso, tipo che possono essere assegnati ad un'unica variabile.
     
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

È un tipo di dato più complesso rappresentato strutturalmente da un insieme di coppie chiave-valore(proprietà) che può essere utilizzato
per rappresentare un entità del mondo reale ma nel linguaggio di programmazione, in questo caso Javascript. Per esempio un oggetto potrebbe essere
un'automobile che come proprieta:
brand: mercedes;
modello (chiave): "Classe A" (valore);
colore: "rosso";
alimentazione: "benzina";
etc etc..  */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let addition =12 + 20;
console.log(addition);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'giacomo';

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let subtraction = 4 - x;
console.log(subtraction);

/* ESERCIZIO 6 (fonte Slide)
 Crea un oggetto in Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby).
 */

let whoIAm = {
nome: 'giacomo',
cognome: 'bartoli',
hobby: 'surf',
};

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = 'jhon';
let name2 = 'Jhon';

console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());

