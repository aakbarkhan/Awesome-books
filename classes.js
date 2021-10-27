let bookList = [
];

const books = document.getElementById('books-name');
const submitBtn = document.getElementById('submit');
const titleValue = document.getElementById('name');
const authorValue = document.getElementById('author');

class BookList {
    constructor(title, author, bookList) {
        this.title = title;
        this.author = author;
        this.bookList = bookList;
    }


    static display(bookList) {
        document.querySelector('#books-name').innerHTML = '';
       const books = document.getElementById('books-name');
       bookList.forEach((book) => {
            books.innerHTML += `
            <div class="book-info">
            <h1  class="book-title">Title: ${book.title}</h1>
            <h2 class="book-title">Author: ${book.author}</h2>
            <button id=${book.id} onclick="removeBooks(this.id)"  class="delete" type="submit">Remove</button>
            </div>
            `;
       });
    titleValue.value = "";
    authorValue.value = "";
       
    }

    removeBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.remove();
            console.log(bookList)
        }
    }

}

function removeBooks(id) {
    const index = bookList.findIndex((prop) => prop.id === id); 
    bookList.splice(index, 1);
    console.log(bookList);
    addLocalStorage();
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    
    const books = new BookList(title, author);
    bookList.push({title:titleValue.value, author:authorValue.value, id:  Math.random().toString(16).slice(2)});
    BookList.display(bookList);
    addLocalStorage();
})
document.querySelector('#books-name').addEventListener('click', (e)=> {
    
    const books = new BookList(bookList);
    books.removeBook(e.target);
    addLocalStorage();
})
window.addEventListener('load', ()=>{
    // const books = new BookList();
    BookList.display(bookList);
});

function addLocalStorage() {
    const localStore = JSON.stringify(bookList);
    localStorage.setItem('bookList', localStore);
}

if (localStorage.getItem('bookList') !== null) {
    let getformcont = localStorage.getItem('bookList');
    bookList = JSON.parse(getformcont);
    BookList.display(bookList)
  }







