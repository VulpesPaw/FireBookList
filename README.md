# FireBookList - Google Firebase 

## Background

The FireBookList was used for my *Gymnasium Exam Thesis* – "Firebase - En analys mellan olika serverspråk", graduation 2021; Kattegattgymnasiet, Halmstad. 
The thesis compares the differences between a Firebase production and a PHP production. This is the firebase project and it is compared to my earlier PHP[-Booklist](https://github.com/VulpesPaw/PHP-BookList/tree/master) project.

## Thesis 

See '[Firebase - En analys mellan olika serverspråk](https://github.com/VulpesPaw/FireBookList/blob/master/Firebase%20-%20Exam%20Thesis.pdf)'

## Purpose

The Firebook Firebase project is a book lister, where users can input books and series which in turn can be seen by anybody.

Google's purpose behind Firebase is that it should be quick and easy to set up.

#### Project requirements:

- Firebase BaaS

- Firestore DaaS

- Authentication

- Authorization

- Full CRUD

- JavaScript Front-end 

## Development

The project is developed in front-end JavaScript utilizing Google Firebase; a BaaS (Backend-as-a-Service), and FireStore; the corresponding DaaS (Database-as-a-Service). Configurations and rules-sets were made in the Firebase configuration panel. 

Firestore comes by default with security features such as database serialization and such. 


#### The firebase project includes but is not limited to the following functionalities:

- Firebase Authentication and Firebase Authorization

- Firebase BaaS

- Firestore DaaS

- Single Page functionalities

- Multiple pages, including all entry overview and detailed view

- Full CRUD with authentication configured in Firebase configurator

- User data stored in Firestore 

<br>

Firebase Authentication does not allow custom data to be applied to its users, such as nicknames or roles. It contains only a user email address and a password. In order to circumvent the data limitation, excess user data gets stored in Firestore. 
 

### GUI

The main page, with a view of different data entries:

![firebooks_preview](https://user-images.githubusercontent.com/63596133/190414558-8ed38105-9158-4270-9f11-152dbcc45ab2.jpg)


## Serialization

The project is Serialized from sensitive data.

`.\validation\key.js` should contain the following:

````JS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'SECRET_API_KEY',
  authDomain: 'AUTHENTICATION_DOMAIN',
  projectId: 'PROJECT_ID',
  storageBucket: 'FIRESTORE_DATABASE_KEY',
  messagingSenderId: 'MESSENGER_ID',
  appId: 'APPLICATION_ID',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
````
The enitre key is accessible through the Firebase Configuration Panel.

## License

ISC License, see License.md

