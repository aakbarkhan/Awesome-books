const books = document.getElementById('books-name'); // fields for display items.

class BookList {
    

    get books() {
        let savedBooks = localStorage.getItem('formcont');
        if(savedBooks != null) {
            return JSON.parse(localStorage.getItem('formcont'));
        } else {
            return [];
        }
        
    }
}