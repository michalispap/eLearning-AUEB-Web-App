const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(express.static("public"));

//Use Case 3
app.post('/register', function (req, res) {
  newUser = req.body;
  const find = USERS.find(i => newUser.emailAddress === i.emailAddress ? i : '')
  if (find) {
    res.status(409).send('fail');
  }
  else {
    res.status(201).send('pass');
    for (let i = 0; i < (USERS.length + 1); i++) {
      if (USERS[i] === undefined) {
        USERS.push(Object.assign({id: i}, newUser));
        break;
      }
    }
  }
})

app.get('/register', function (req, res) {
  res.json(USERS);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

//Local Database

class User {
  constructor(id=0, firstName='', lastName='', phoneNumber='', streetAddress='', city='', country='', emailAddress='', password='', verifyPassword='', education='') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
    this.emailAddress = emailAddress;
    this.password = password;
    this.verifyPassword = verifyPassword;
    this.education = education;
  }
}

const USERS = [new User(0, 'MICHAIL', 'PAPAPETROS', '6936964490', 'Egeou Pelagous 89', 'Athens', 'Greece', 'michalispap99@gmail.com', '!a123456', '!a123456', 'Undergraduate Degree')];
var newUser = new User();

//Use Case 4
var login;
app.post('/sign-in', function (req, res) {
  login = req.body;
  const find = USERS.find((i) => { return (login.emailAddress === i.emailAddress && login.password === i.password) ? i : ''; })
  if (find) {
    res.status(200).send('pass');
  }
  else {
    res.status(401).send('fail');
  }
})

app.get('/sign-in', function (req, res) {
  for (let i = 0; i < (USERS.length + 1); i++) {
    if (USERS[i].emailAddress === login.emailAddress && USERS[i].password === login.password) {
      var user = USERS[i];
      res.send(user);
      break;
    }
  }
})

