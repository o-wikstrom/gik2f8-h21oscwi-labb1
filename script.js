"use strict";
/*  Vad ska vi göra här? */
let bookList = [];

window.addEventListener('load', () => {
    getAll().then(apiBooks => (bookList = apiBooks));
})

/* const searchField = document.children[0].children[1].children[1].children[1]; */
const searchField = document.getElementById("searchField");


/* keydown, keyup */
searchField.addEventListener('keyup', (e) => searchBooks(e.target.value));
/*searchField.addEventListener("keyup", (e) =>
    renderBookList(
        bookList.filter(({ title, author }) => {
            const searchTerm = e.target.value.toLowerCase();
            return title.toLowerCase().indexOf(searchTerm) >= 0 || author.toLowerCase().indexOf(searchTerm) >= 0;
        })   
    )
);*/

async function searchBooks(searchTerm) {

    renderBookList(
        bookList.filter(
            ({ title, author }) =>
                title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
                author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0

        )
    );
}




const filteredList = bookList.filter(({ title, author }) =>
(title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
    author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0));




function renderBookList(bookList) {


    const existingElement = document.querySelector('.book-list');
    console.log(existingElement);

    const root = document.getElementById('root');
    if (existingElement) {
        root.removeChild(existingElement);
    }
    if (bookList.length > 0 && searchField.value) {
        root.insertAdjacentHTML('beforeend', BookList(bookList));
    }

}
