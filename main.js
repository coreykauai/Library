const LIBRARY_FORM = document.querySelector("form");
const ALLBOOKS = document.querySelector(".allBooks");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show");
const closeButton = document.querySelector("dialog button");
const test = document.querySelector("#test");
const unreadbut = document.querySelector(".filter_unread");
const readbs = document.querySelector(".filter_books");
const dbut = document.querySelector(".filter_delete");
const reads = document.querySelector(".filter_reads");
const backdrop = document.querySelector("body");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

// window.addEventListener("click", (event) => {
//   event.stopPropagation();
//   if (window.onclick == dialog) {
//     dialog.showModal();
//   } else {
//     console.log("wtf");
//     dialog.close();
//   }

// });

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
  new Book("harry", "Plumber", 1955),
  new Book("the", "Plumber", 1875),
  new Book("and me", " the Plumber", 1965),
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

function renderbook(title, author, date, id, read) {
  const BOOK_CONTAINER = document.createElement("div");
  const BOOK_TITLE = document.createElement("h3");
  const BOOK_AUTOR = document.createElement("p");
  const DATE_MADE = document.createElement("p");
  const READ_BUT = document.createElement("button");
  const DELETE_BUT = document.createElement("button");
  const book_id = document.createElement("p");
  const book_red = document.createElement("p");

  BOOK_CONTAINER.classList.add("book-container");
  BOOK_CONTAINER.classList.add("bra");
  READ_BUT.classList.add("buttonss");
  DELETE_BUT.classList.add("buttonss");
  book_id.classList.add("bookid");

  BOOK_TITLE.textContent = title;
  BOOK_AUTOR.textContent = author;
  DATE_MADE.textContent = date;
  READ_BUT.textContent = "Read";
  DELETE_BUT.textContent = "Delete";
  read = false;

  BOOK_CONTAINER.style.backgroundColor = bookColor();

  READ_BUT.addEventListener("click", toggleReadStatus);

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
}

function toggleReadStatus(event) {
  const bookContainer = event.target.parentElement;
  const bookId = bookContainer.id;

  bookContainer.classList.toggle("read");

  const bookToUpdate = books.find((book) => book.id === bookId);
  if (bookToUpdate) {
    bookToUpdate.read = !bookToUpdate.read;
    bookToUpdate.color = bookToUpdate.read
      ? "rgba(244, 70, 51, 0.711)"
      : bookColor();
    renderBooks();
  }
}

// function toggleReadStatus(event) {
//   const bookContainer = event.target.parentElement;
//   const bookId = bookContainer.id;
//   const readButton = bookContainer.querySelector("button");

//   bookContainer.classList.toggle("read");

//   const bookToUpdate = books.find((book) => book.id === bookId);
//   if (bookToUpdate) {
//     bookToUpdate.read = !bookToUpdate.read;
//     renderBooks();
//   }

//   if (bookContainer.classList.contains("read")) {
//     bookContainer.read = true;
//     readButton.textContent = "Undo";
//     bookContainer.style.backgroundColor = "rgba(244, 70, 51, 0.711)";
//   } else {
//     readButton.textContent = "Read";
//     bookContainer.style.backgroundColor = bookColor();
//   }
// }
// function toggleReadStatus(event) {
//   const bookContainer = event.target.parentElement;
//   const bookId = bookContainer.id;
//   const bookToUpdate = books.find((book) => book.id === bookId);
//   if (bookToUpdate) {
//     bookToUpdate.read = !bookToUpdate.read;
//     renderBooks();
//   }

// console.log(event.target.value);
// books = books.filter((book) => {
//   if (book.id === id) {
//     book.read = "true";
//   }
//   renderBooks();
//   console.log(books);
// });
// bookContainer.classList.toggle("read");
// when read button clicked, target this book by id and update the read status then rerender
//   const readButton = bookContainer.querySelector("button");

//   if (bookContainer.classList.contains("read")) {
//     books.read = true;
//     readButton.textContent = "Undo";
//     bookContainer.style.backgroundColor = "rgba(244, 70, 51, 0.711)";
//   } else {
//     readButton.textContent = "Read";
//     bookContainer.read = false;
//     bookContainer.style.backgroundColor = bookColor();
//   }
// }

const bookColor = () => {
  let r = Math.floor(Math.random() * 75);
  let b = Math.floor(Math.random() * 75);
  let g = Math.floor(Math.random() * 75);
  console.log(`rbg(${r}, ${b}, ${g})`);
  return `rgb(${r}, ${b}, ${g}, 0.8)`;
};

function renderBooks() {
  ALLBOOKS.innerHTML = "";
  for (const book of books) {
    renderbook(book.title, book.author, book.date, book.id, book.read);
  }
}

renderBooks();

// function deleteBook(e) {
//   e.target.parentNode.style.display = "none";
// }

// function deleteBook(bookContainer) {
//   const index = Array.from(ALLBOOKS.children).indexOf(bookContainer);
//   if (index !== -1) {
//     books.splice(index, 1);
//     renderBooks();
//   }
// }

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
    // div.classList.remove(".bra");
  });
}

readbs.addEventListener("click", readfi);
function readfi() {
  const readfilter = document.querySelectorAll(".bra");
  readfilter.forEach((div) => {
    div.style.display = readfilter ? "block" : "none";
  });
}

dbut.addEventListener("click", dlot);
function dlot(e) {
  books.splice(0, books.length);
  renderBooks();

  if (dbut.textContent === "Delete All") {
    e.target.textContent = "Undo";
  } else {
    e.target.textContent = "Delete All";
  }
}

const filterit = document.querySelector("filtercont");
const showFilt = document.querySelector(".showfilters");
showFilt.addEventListener("click", () => {
  dbut.classList.toggle("showem");
  readbs.classList.toggle("showem");
  unreadbut.classList.toggle("showem");
  reads.classList.toggle("showem");
});

renderBooks();
