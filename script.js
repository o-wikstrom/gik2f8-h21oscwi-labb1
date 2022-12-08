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
const searchField = document.getElementById("searchField");


/* keydown, keyup */

searchField.addEventListener("keyup", handleKeyPress);

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

function renderBookList(bookList) {
    let html = `<ul class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">`;
    for (let i = 0; i < bookList.length; i++) {
        html += `<li
        class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
        ${bookList[i].author} - ${bookList[i].title}
        </li>`

    }
    html += `</ul>`;

    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);
    
    const root = document.getElementById('root');
    if (existingElement) {
        root.removeChild(existingElement);
    }

    root.insertAdjacentHTML('beforeend', html);

}
