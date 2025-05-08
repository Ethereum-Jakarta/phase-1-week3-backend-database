const db = require('./db');

db.all('SELECT * FROM people', function (err, people) {
  console.log(people);
});