console.log('Hello World!')

let bookList = [];

const books = document.getElementById('books-name');
const submitBtn = document.getElementById('submit');
console.log(books);

function addBooks() {
    books.innerHTML += `
    <h1 class="book-title">Title</h1>
    <h2 class="book-title">Author</h2>
    <button type="submit">Remove</button>
    `
}

function removeBooks() {
    const books = document.getElementsByClassName('book-title');
    const title = document.getElementsByClassName('book-title');
}

submitBtn.addEventListener('click', addBooks)