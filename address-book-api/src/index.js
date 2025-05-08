const express = require('express');
const contactRouter = require('./routes/contact-routes');
const groupContactRouter = require('./routes/group-contact-routes');
const groupsRouter = require('./routes/groups-routes');

const app = express(),
    port = 3000;

app.use(express.json());

app.use('/contact', contactRouter);
app.use('/group-contact', groupContactRouter);
app.use('/groups', groupsRouter);

app.listen(port, console.log(`Server listening on http://localhost:${port}/`));
