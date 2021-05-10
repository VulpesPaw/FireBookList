
let init = false; // Used to determine book-load process

// Waiting for document to load before loading all books
document.addEventListener('DOMContentLoaded', (event) => {
  const app = firebase.app();
  console.log(app);
  const db = firebase.firestore();
  const bookLister = db.collection('books');

  /*
  first fires an onSnapShot to load all documents, then using docChanges to listen for
   changed documents, and thereby using less data when updating because onSnappShot 
   returns the entire collection
   */
  if (init) {
    bookLister.onSnapshot((docs) => {
      var books = [];
      // docChanges() gets changing documents, snapshot gets changed collection
      docs.docChanges().forEach((element) => {
        books.push({ id: element.doc.id, data: element.doc.data() });
        console.log(books);
        replaceClientBook(books);
      });
    });
  } else {
    bookLister.orderBy('timestamp', 'desc').onSnapshot((querySnapshot) => {
      var books = [];
      querySnapshot.forEach((doc) => {
        books.push({ id: doc.id, data: doc.data() });
      });
      renderBookColletion(books);
      console.log('Current cities in CA: ', books.join(', '));
    });
    init = true;
  }
});

// Replace a single book, use with docChanges()
function replaceClientBook(info) {
  let bookId;
  let output = info.map((book) => {
    bookId = book.id;

    return `<a href="bookReader.html?book=${i.id}">
      <h3>${book.data.title}, ${book.data.serie}</h3><br>
      <h3><i>${book.data.author}</i><br></a>
      <button onclick="renderUpdateForm('${book.id}')" > update </button> 
      <button onclick="deleteDocs('${book.id}')" > Delete </button>
      `;
  });

  console.log('let bookId', bookId);
  document.getElementById(bookId).innerHTML = output;
}

// Renders intire book collection
function renderBookColletion(info) {
  let output = info.map((i) => {
    return `<a href="bookReader.html?book=${i.id}"><div id="${i.id}">
      <h3>${i.data.title}, ${i.data.serie} </h3><br>
      <h3><i>${i.data.author}</i><br></a>
      <button onclick="renderUpdateForm('${i.id}')" > update </button> 
      <button onclick="deleteDocs('${i.id}')" > Delete </button>
      </div>
      `;
  });
  document.querySelector('#allBooks').innerHTML = output.join('<hr>');
}
