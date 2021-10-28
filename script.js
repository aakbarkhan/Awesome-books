let bookList = [
];

const books = document.getElementById('books-name');
const submitBtn = document.getElementById('submit');
const titleValue = document.getElementById('name');
const authorValue = document.getElementById('author');

function addBooks() {
    if(titleValue.value.length > 0 && authorValue.value.length > 0 ) {
        bookList.push({title:titleValue.value, author:authorValue.value,id:bookList.length});
        display();
        addLocalStorage();
    } else {
        alert('Fields are Empty!');
    }
}

//  removeBooks(id)
function removeBooks(id) {
    bookList = bookList.filter((e) => e.id != id);
    console.log(id)
    display();
    addLocalStorage();
}
function display() {
    document.querySelector('#books-name').innerHTML = '';
    bookList.forEach((book) => {
        books.innerHTML += `
        <h1  class="book-title">Title: ${book.title}</h1>
        <h2 class="book-title">Author: ${book.author}</h2>
        <button id=${book.id}  onClick=removeBooks(id) type="submit">Remove</button>
        `;
    });
    titleValue.value = "";
    authorValue.value = "";
}
submitBtn.addEventListener('click',addBooks);
function addLocalStorage() {
    const localStore = JSON.stringify(bookList);
    localStorage.setItem('formcont', localStore);
}
if (localStorage.getItem('formcont') !== null) {
    let getformcont = localStorage.getItem('formcont');
    bookList = JSON.parse(getformcont);
    display()
  }

