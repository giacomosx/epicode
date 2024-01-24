// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)


//ESERCIZI IN JS

// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function changeH1(newName){
    document.getElementById('storeName').innerText = newName;
}


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function changeBodyBg(color){
    document.body.style.backgroundColor = color;
}


// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeAddress(newaddress){
    document.getElementById('address').innerText = newaddress;
}


// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addClasstoLink(cssClass){
    const allLinks = document.querySelectorAll('.card a');
    allLinks.forEach(link => {
        link.classList.add(cssClass);
    })
}


// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function changeImgVisibility(boolean) {
    const allImg = document.querySelectorAll('.card img');
    allImg.forEach(img => {
        if (boolean) {
            img.classList.add('hideImg');
        } else {
            img.classList.remove('hideImg');
        }
    })
}


// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function changePriceColor(color){
    const allPrices = document.querySelectorAll('.price');
    allPrices.forEach(price => {
        price.style.color = color;
    })
}