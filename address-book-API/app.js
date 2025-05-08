const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/route');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
