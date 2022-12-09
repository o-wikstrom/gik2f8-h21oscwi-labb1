'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list'); 

  const root = document.getElementById('root');
  existingElement && root.removeChild(existingElement);

  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

    let bookInfo = document.querySelector(".book-list");

    if (bookInfo){ /* kollar om listan inte är null*/
        bookInfo.addEventListener("mouseover", function(e) {
            if (e.target && e.target.matches("li.book-list__item")) {
                let bookId = e.target.value
                let book = bookList.find(book => book.id === bookId)
                bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', bookDetails(book)); /* visar omslagsbild för boken, från bookdetails*/
            }
        });

        bookInfo.addEventListener("mouseout", function(e) { /* gör så bilden försvinner när mussen inte pekar*/
            let bookDetail = document.querySelector("#bookDetail");
            if(bookDetail)
                bookDetail.remove();
        });
    }
}



