"use strict";
/*  Vad ska vi göra här? */
const bookList = [
    {
        id: 1,
        author: "Charles dickens",
        title: "Oliver twist",
    },
    {
        id: 2,
        author: "William Shakespear",
        title: "Hamlet",
    },
];

 /* const searchField = document.children[0].children[1].children[1].children[1]; */
 const searchField = document.getElementById('searchField')
console.log(searchField);

/* keydown, keyup */

searchField.addEventListener('keyup', handleKeyPress);

function handleKeyPress(e) {
    /* Ta emot/läsa av värdet i inputfältet.
          Sicka värdet till searchBooks  
          searchBooks returnerar en filtrerad lista
          filtrerade listan skickas till renderBookList
      */
    searchBooks(e.target.value);
}

function searchBooks(searchTerm) {
    /*  Loopa igenom bookList
          För varje varn i loppen, ta det aktuella elementet (boken)
          jämnför titeln med söktermen
          Om söktermen finns någonstans i titeln, lägg till elementet i ny lista (filteredList)
          Returnerar filteredList eller anropar renderBookList?
  
  
      */
          const filteredList = [];
    for (let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        
        if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
            filteredList.push(bookList[i]);
        }
    }
    renderBookList(filteredList);
}

function renderBookList(list) {
    console.log(list);
 }
