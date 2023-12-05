const LIBRARY_FORM = document.querySelector("form");
const ALLBOOKS = document.querySelector(".allBooks");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show");
const closeButton = document.querySelector("dialog button");
const test = document.querySelector("#test");
const unreadbut = document.querySelector(".filter_unread");
const readbs = document.querySelector(".filter_books");
const dbut = document.querySelector(".filter_delete");
const readonly = document.querySelector(".filter_reads");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

class Book {
  constructor(title, author, date, read = false, color) {
    this.id = title + Math.random() * 255 + author;
    (this.title = title),
      (this.author = author),
      (this.date = date),
      (this.read = read);
    this.color = color;
  }
}

let books = [
  new Book(
    "Harry Plumber The Plumber",
    "JK all the way",
    1955,
    false,
    bookColor()
  ),
  new Book("Harry Potter the Plumber", "Still JK", 1875, false, bookColor()),
  new Book("And me", " the Plumber", 1965, false, bookColor()),
];

function NewBookClick() {
  const formElements = LIBRARY_FORM.elements;

  const bookTitle = formElements["book-title"].value;
  const bookAuthor = formElements["author-name"].value;
  const bookDate = formElements["print-date"].value;

  const newbook = new Book(bookTitle, bookAuthor, bookDate, false, bookColor());

  books.push(newbook);

  renderBooks();
}

LIBRARY_FORM.addEventListener("submit", NewBookClick);

function renderbook({ title, author, date, id, read, color }) {
  const BOOK_CONTAINER = document.createElement("div");
  const BOOK_TITLE = document.createElement("h3");
  const BOOK_AUTOR = document.createElement("p");
  const DATE_MADE = document.createElement("p");
  const READ_BUT = document.createElement("button");
  const DELETE_BUT = document.createElement("button");
  const book_id = document.createElement("p");

  BOOK_CONTAINER.classList.add("book-container");
  READ_BUT.classList.add("buttonss");
  DELETE_BUT.classList.add("buttonss");
  book_id.classList.add("bookid");

  BOOK_TITLE.textContent = title;
  BOOK_AUTOR.textContent = author;
  DATE_MADE.textContent = date;
  READ_BUT.textContent = read ? "unread" : "read";
  DELETE_BUT.textContent = "Delete";

  BOOK_CONTAINER.style.backgroundColor = read
    ? "rgba(244, 70, 51, 0.711)"
    : color;

  READ_BUT.addEventListener("click", (evt) => toggleReadStatus(evt, id));

  DELETE_BUT.addEventListener("click", () => {
    books = books.filter((book) => {
      return book.id !== id;
    });

    renderBooks();
  });

  BOOK_CONTAINER.append(
    BOOK_TITLE,
    BOOK_AUTOR,
    DATE_MADE,
    READ_BUT,
    DELETE_BUT
  );

  ALLBOOKS.append(BOOK_CONTAINER);

  unreadbut.addEventListener("click", () => {
    BOOK_CONTAINER.style.display = read ? "none" : "block";
  });

  readonly.addEventListener("click", () => {
    BOOK_CONTAINER.style.display = read ? "block" : "none";
  });
}

function toggleReadStatus(read, bookId) {
  const bookToUpdate = books.find((book) => book.id === bookId);
  if (bookToUpdate) {
    console.log({ bookToUpdate });
    bookToUpdate.read = !bookToUpdate.read;
    renderBooks();
  }
}

function bookColor() {
  let r = Math.floor(Math.random() * 75);
  let b = Math.floor(Math.random() * 75);
  let g = Math.floor(Math.random() * 75);
  return `rgb(${r}, ${b}, ${g}, 0.8)`;
}

function renderBooks() {
  ALLBOOKS.innerHTML = "";
  // console.log(books);
  for (const book of books) {
    renderbook(book);
  }
}

renderBooks();

readbs.addEventListener("click", readfi);
function readfi() {
  const readfilter = document.querySelectorAll(".book-container");
  readfilter.forEach((div) => {
    div.style.display = readfilter ? "block" : "none";
  });
}

dbut.addEventListener("click", dlot);
function dlot() {
  books.splice(0, books.length);
  renderBooks();
}

const filterit = document.querySelector("filtercont");
const showFilt = document.querySelector(".showfilters");
showFilt.addEventListener("click", () => {
  dbut.classList.toggle("showem");
  readbs.classList.toggle("showem");
  unreadbut.classList.toggle("showem");
  readonly.classList.toggle("showem");
});

renderBooks();
