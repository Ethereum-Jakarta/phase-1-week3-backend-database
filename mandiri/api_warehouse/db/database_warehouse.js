const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: '172.21.34.173',
    database: 'warehouse',
    password: 'buku2708',
    port: '5432'
})

client.connect()
    .then(() => {
        console.log('Terhubung ke PostgreSQL');
    })
    .catch((err) => {
        console.error('Error:', err);
    })

module.exports = client;