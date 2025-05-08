const db    = require('./db');
const args  = process.argv.slice(2);
const query = `UPDATE people
               SET name         ='${args[1]}',
                   phone_number ='${args[2]}',
                   email        ='${args[3]}'
               WHERE id=${args[0]}`;

db.run(query, function (err) {
  if (err) throw err;
  console.log('Successfully updated!');
});