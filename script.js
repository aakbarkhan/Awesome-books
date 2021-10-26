let bookList = [
];

const books = document.getElementById('books-name');
const submitBtn = document.getElementById('submit');
const titleValue = document.getElementById('name');
const authorValue = document.getElementById('author');

function addBooks() {
    bookList.push({title:titleValue.value, author:authorValue.value,id:bookList.length});
    display();    
}

//  removeBooks(id)
function removeBooks(id) {
       const filterbookList = bookList.filter((e) => e.id != id);
    bookList = filterbookList;
    display();
}
function display() {
   
    document.querySelector('#books-name').innerHTML = '';
    bookList.forEach((book) => {
        books.innerHTML += `
        <h1  class="book-title">Title: ${book.title}</h1>
        <h2 class="book-title">Author: ${book.author}</h2>
        <button id=${bookList.length-1}  onClick=removeBooks(id) type="submit">Remove</button>
        `;
    });
    titleValue.value = "";
    authorValue.value = "";

}

submitBtn.addEventListener('click',addBooks);
