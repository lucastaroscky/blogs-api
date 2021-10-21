/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_SECRET;
const header = { algorithm: 'HS256', expiresIn: '7d' };


const createToken = (payload) => {
  const token = jwt.sign(payload, secret, header);

  return token;
}

module.exports = { createToken };
