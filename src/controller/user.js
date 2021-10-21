const { Router } = require('express');
const rescue = require('express-rescue');

const { createToken } = require('../auth/jwt');

const user = Router();

user.post('/', rescue((req, res) => {
  const user = req.body;
  const token = createToken(user);

  res.status(200).json({ token });
}));

module.exports = user;

