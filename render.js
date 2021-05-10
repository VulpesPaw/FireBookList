// could use regExp, but you will solve one problem in order to get two new ones

// gets a html-page or whatever you want to fetch
async function fetchPage(path) {
  try {
    let response = await fetch(path); // returns promise
    return response.text();
  } catch (err) {
    console.log('Fetch error:' + err);
  }
}

// renders loginform and appends to body
async function renderLogin() {
  var loginDiv = document.createElement('div');
  loginDiv.innerHTML = await fetchPage('./html/loginForm.html');

  loginDiv.style = `background-color: rgba(100, 100, 100, 0.8);
  margin: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;`;
  loginDiv.id = 'loginId';

  let resp = await document.body.appendChild(loginDiv);

  console.log('print to screen Login');

  DQ('#formLogin').addEventListener('submit', loginUser);

  DQ('#loginId').addEventListener('click', (event) => {
    if (event.target.id == 'loginId') removeElement('#loginId');
  });
}

// renders registerform and appends to body
async function renderRegister() {
  var registerDiv = document.createElement('div');
  registerDiv.innerHTML = await fetchPage('./html/registerForm.html');

  registerDiv.style = `background-color: rgba(100, 100, 100, 0.8);
  margin: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;`;
  registerDiv.id = 'registerId';

  let resp = await document.body.appendChild(registerDiv);
  console.log('print to screen Register');
  document
    .querySelector('#formRegister')
    .addEventListener('submit', registerUserInFirebase);
  DQ('#registerId').addEventListener('click', (event) => {
    if (event.target.id == 'registerId') removeElement('#registerId');
  });
}

// renders addbook-form and appends to body
async function renderAddBook() {
  var bookAdderDiv = document.createElement('div');
  bookAdderDiv.innerHTML = await fetchPage('./html/AddBook.html');

  bookAdderDiv.style = `background-color: rgba(100, 100, 100, 0.8);
  margin: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;`;
  bookAdderDiv.id = 'bookAdderId';

  let resp = await document.body.appendChild(bookAdderDiv);
  console.log('print to screen AddBook');
  document
    .querySelector('#formAddBook')
    .addEventListener('submit', addBookToDataBase);
  DQ('#bookAdderId').addEventListener('click', (event) => {
    if (event.target.id == 'bookAdderId') removeElement('#bookAdderId');
  });
}

// renders updateform and appends to body
async function renderUpdateForm(bookId) {
  var bookUpdateDiv = document.createElement('div');
  bookUpdateDiv.innerHTML = await fetchPage('./html/updateForm.html');

  bookUpdateDiv.style = `background-color: rgba(100, 100, 100, 0.8);
  margin: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;`;
  bookUpdateDiv.id = 'bookUpdateId';

  let resp = await document.body.appendChild(bookUpdateDiv);
  console.log('print to screen AddBook');
  DQ('#updId').value = bookId;
  DQ('#formUpdate').addEventListener('submit', updateBooks);
  DQ('#bookUpdateId').addEventListener('click', (event) => {
    if (event.target.id == 'bookUpdateId') removeElement('#bookUpdateId');
  });
}
// ! Doesnt need to fetch navBar, I'll use different ones regardless
/* 

renderNavigationBar();

async function renderNavigationBar() {
  var navigation = document.createElement('nav');
  console.log(window.location.pathname);
  if (window.location.pathname == '/bookReader.html') {
    navigation.innerHTML = await fetchPage('./html/navigationbarBooks.html');
  } else {
    navigation.innerHTML = await fetchPage('./html/navigationbar.html');
  }
  /* navigation.innerHTML = `
  <ul>
    <li class="li1"><button onclick="location.href='/'">Home</button></li>
    <li class="li2"><h1>My Book List</h1></li>
    <li class="li3"><button onclick="location.href='{{logoutPath}}'">Logout</button></li>
  </ul>
  `; */
/* navigation.id = 'navigationbar';
  console.log(await navigation);

  resp = await document.querySelector('#navbar').appendChild(navigation);
  console.log('Navbar:', resp);
}*/

/*
function renderSingout() {
  console.log('Render Singout');

  var singout = document.createElement('input');
  singout.type = 'button';
  singout.value = 'Sing out';
  singout.id = 'signOut';
  document.getElementById('userAuthControls').appendChild(singout);

  document.querySelector('#signOut').addEventListener('click', () => {
    firebase.auth().signOut();
  });
}*/

async function renderUsernameRequest() {
  var bookUpdateDiv = document.createElement('div');
  bookUpdateDiv.innerHTML = await fetchPage('./html/requestUsernameForm.html');

  bookUpdateDiv.style = `background-color: rgba(100, 100, 100, 0.8);
  margin: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;`;
  bookUpdateDiv.id = 'usernameId';

  let resp = await document.body.appendChild(bookUpdateDiv);
  console.log('print to screen get username');
  DQ('#formUsername').addEventListener('submit', addUsernameToUsercollection);
  DQ('#usernameId').addEventListener('click', (event) => {
    if (event.target.id == 'usernameId') removeElement('#usernameId');
  });
}

// Allows custom render of elements, meant for input-fields
function customRender(element, type = null, value, id, addTo) {
  var createElement = document.createElement(element);
  if (type) createElement.type = type;
  createElement.value = value;
  createElement.id = id;
  document.querySelector(addTo).appendChild(createElement);
}

// removes parent of element, including queryselectors
function removeParrent(event) {
  console.log(event.parentElement.id);
  document.querySelector(event.parentElement.id).remove();
  console.log('Removed:', event.parentElement.id);
}

// removes element, you can send it as an object or send an id directly, including removal of  queryselectors
function removeElement(event) {
  document.querySelector(event.id || event).remove();
  console.log('Removed:', event.id || event);
}
