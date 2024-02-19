
function Library(name, address) {
    this.name = name;
    this.books = [];
    this.address = address;
    this.numberOfMembers = this.books.length * 15;

    this.printBooks = function() {
        console.log("Books available in " + this.name + ":");
        this.books.forEach(function(book) {
            console.log("- " + book.title);
        });
    };
    this.addBook = function(book) {
        
        var newBook = Object.create(book);
        
        this.books.push(newBook);
    };
}


function Book(title, genre) {
    this.title = title;
    this.genre = genre;
    this.libraries = [];
    this.authors = [];

    this.addLibrary = function(library) {
        const existingLibraries = this.libraries.filter(lib => lib === library);

        if (existingLibraries.length === 0) {
            this.libraries.push(library);
            
            library.books.push(this);
        }
    };

    this.removeLibrary = function(library) {
        this.libraries = this.libraries.filter(lib => lib !== library);

        library.books = library.books.filter(book => book !== this);
    };
}


function Author(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = [];
    this.currentBook = null;

    this.startBook = function(book) {
        if (this.currentBook !== null) {
            
            this.books.push(this.currentBook);
        }
        
        this.currentBook = book;
        
        this.books.push(book);
    };  
}


let library1 = new Library("Central Library", "456 Oak St");
let library2 = new Library("Community Library", "789 Elm St");


let book1 = new Book("The Great Gatsby", "Fiction");
let book2 = new Book("To Kill a Mockingbird", "Classic");
let book3 = new Book("Harry Potter and the Philosopher's Stone", "Fantasy");


let author1 = new Author("F. Scott", "Fitzgerald", 1896);
let author2 = new Author("Harper", "Lee", 1926);
let author3 = new Author("J.K.", "Rowling", 1965);


library1.addBook(book1);
library1.addBook(book2);
library2.addBook(book2);
library2.addBook(book3);


author1.startBook(book1);
author2.startBook(book2);
author3.startBook(book3);


library1.printBooks(); 
library2.printBooks(); 