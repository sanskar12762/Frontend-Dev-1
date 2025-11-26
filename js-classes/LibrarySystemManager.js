class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    this.isIssued = true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

let b1 = new Book("The Alchemist", "Paulo Coelho", "101");
let b2 = new Book("Atomic Habits", "James Clear", "102");
let b3 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "103", true);

let books = [b1, b2, b3];

console.log("Available Books:");
for (let i = 0; i < books.length; i++) {
  if (!books[i].isIssued) {
    console.log(books[i].title, books[i].author);
  }
}

function issueByISBN(isbn) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].isbn === isbn) {
      books[i].issueBook();
      console.log("Book issued:", books[i].title);
      return;
    }
  }
  console.log("Book not found");
}


issueByISBN("102");
