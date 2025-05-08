const db    = require('./db');
const args  = process.argv.slice(2);
const query = `INSERT INTO people (name, phone_number, email)
               VALUES ('${args[0]}', '${args[1]}', '${args[2]}')`;

db.run(query, function (err) {
  if (err) throw err;
  console.log('Successfully created a new row!');
});