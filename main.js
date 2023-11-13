const LIBRARY_FORM = document.querySelector("form");
const ALLBOOKS = document.querySelector(".allBooks");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

class Book {
  constructor(title, author, date) {
    (this.title = title), (this.author = author), (this.date = date);
  }
}

const books = [
  new Book("harry", "Plumber", 1955),
  new Book("the", "Plumber", 1875),
  new Book("and me", " the Plumber", 1965),
];

function NewBookClick(event) {
  event.preventDefault();

  const formElements = LIBRARY_FORM.elements;

  const bookTitle = formElements["book-title"].value;
  const bookAuthor = formElements["author-name"].value;
  const bookDate = formElements["print-date"].value;

  const newbook = new Book(bookTitle, bookAuthor, bookDate);

  books.push(newbook);
  renderBooks();
}

LIBRARY_FORM.addEventListener("submit", NewBookClick);

function renderbook(title, author, date) {
  const BOOK_CONTAINER = document.createElement("div");

  const BOOK_TITLE = document.createElement("h3");
  const BOOK_AUTOR = document.createElement("p");
  const DATE_MADE = document.createElement("p");

  BOOK_CONTAINER.classList.add("book-container");

  BOOK_TITLE.textContent = title;
  BOOK_AUTOR.textContent = author;
  DATE_MADE.textContent = date;

  BOOK_CONTAINER.append(BOOK_TITLE, BOOK_AUTOR, DATE_MADE);

  ALLBOOKS.append(BOOK_CONTAINER);
}

function renderBooks() {
  ALLBOOKS.innerHTML = "";
  for (const book of books) {
    renderbook(book.title, book.author, book.date);
  }
}

renderBooks();
