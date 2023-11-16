const LIBRARY_FORM = document.querySelector("form");
const ALLBOOKS = document.querySelector(".allBooks");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show");
const closeButton = document.querySelector("dialog button");
const test = document.querySelector("#test");
const unreadbut = document.querySelector(".filter_unread");
const readbs = document.querySelector(".filter_books");
const dbut = document.querySelector(".filter_delete");

showButton.addEventListener("click", (event) => {
  event.stopPropagation();
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

// dialog.addEventListener("click", (event) => {
//   alert("click");
//   event.stopPropagation();
// });

// document.addEventListener("click", () => {
//   if (!dialog.open) return;

//   dialog.close();
// });

// test.addEventListener("click", () => {
//   alert("anyhting");
// });

// dialog.addEventListener("click", (e) => {
//   if (e.target === dialog) {
//     alert("do something");
//     alert(e.target);
//     alert(e.currentTarget);
//   }
// });

// if (window.onclick !== modal) {
//   modal.window.close;
// }

// window.onclick = function (event) {
//   if (event.target === modal) {
//     dialog.close();
//   }
// };

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
  const READ_BUT = document.createElement("button");
  const DELETE_BUT = document.createElement("button");

  BOOK_CONTAINER.classList.add("book-container");
  BOOK_CONTAINER.classList.add("bra");
  READ_BUT.classList.add("buttonss");
  DELETE_BUT.classList.add("buttonss");

  BOOK_TITLE.textContent = title;
  BOOK_AUTOR.textContent = author;
  DATE_MADE.textContent = date;
  READ_BUT.textContent = "Read";
  DELETE_BUT.textContent = "Delete";

  const bgColor = bookColor();

  BOOK_CONTAINER.style.backgroundColor = bgColor;

  READ_BUT.addEventListener("click", toggleReadStatus);
  DELETE_BUT.addEventListener("click", () => deleteBook(BOOK_CONTAINER));

  BOOK_CONTAINER.append(
    BOOK_TITLE,
    BOOK_AUTOR,
    DATE_MADE,
    READ_BUT,
    DELETE_BUT
  );

  ALLBOOKS.append(BOOK_CONTAINER);
}

function toggleReadStatus(event) {
  const bookContainer = event.target.parentNode;

  bookContainer.classList.toggle("read");

  const readButton = bookContainer.querySelector("button");

  if (bookContainer.classList.contains("read")) {
    readButton.textContent = "Unread";
    bookContainer.style.backgroundColor = "rgba(244, 70, 51, 0.711)";
  } else {
    readButton.textContent = "Read";
    bookContainer.style.backgroundColor = bookColor();
    bookContainer.classList.remove("bra");
  }
}

const bookColor = () => {
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  console.log(`rbg(${r}, ${b}, ${g})`);
  return `rgb(${r}, ${b}, ${g}, 0.8)`;
};

function renderBooks() {
  ALLBOOKS.innerHTML = "";
  for (const book of books) {
    renderbook(book.title, book.author, book.date);
  }
}

renderBooks();

function deleteBook(bookContainer) {
  const index = Array.from(ALLBOOKS.children).indexOf(bookContainer);
  if (index !== -1) {
    books.splice(index, 1);
    renderBooks();
  }
}

// unreadbut.addEventListener("click", () => {
//   if (books.classList.contains("read")) {
//     books.classList.add("hide");
//   }
//   console.log("idk");
// });

// filterit.books.forEach(boook => {
//   if (classList.contains("unread"))
// });

unreadbut.addEventListener("click", unreadfi);
function unreadfi() {
  const unreadfilter = document.querySelectorAll(".read");
  unreadfilter.forEach((div) => {
    div.style.display = unreadfilter ? "none" : "block";
    div.classList.remove(".bra");
  });
}

readbs.addEventListener("click", readfi);
function readfi() {
  const readfilter = document.querySelectorAll(".bra");
  readfilter.forEach((div) => {
    // event.stopPropagation();
    div.style.display = readfilter ? "block" : "none";
  });
}

dbut.addEventListener("click", dlot);
function dlot() {
  ALLBOOKS.classList.toggle("hide");
}
const filterit = document.querySelector("filtercont");
const showFilt = document.querySelector(".showfilters");
showFilt.addEventListener("click", () => {
  dbut.classList.toggle("showem");
  readbs.classList.toggle("showem");
  unreadbut.classList.toggle("showem");
});

renderBooks();
