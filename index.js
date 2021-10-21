const express = require('express');

const user = require('./src/controller/user');

const app = express();

app.use(express.json());

app.use('/user', user);

app.get('/ping', (req, res) => res.status(200).json('pong'));

const PORT = 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))