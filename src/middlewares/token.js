const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');

const { NOT_FOUND, UNAUTHORIZED } = require('../utils/statusCode')

// eslint-disable-next-line no-undef
const secret = process.env.JWT_SECRET;

const verifyToken = rescue(async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(NOT_FOUND).json({ message: 'Token not found!' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded;

    next();
  }
  catch (err) {
    return req.status(UNAUTHORIZED).json({ message: err.message });
  }
});

module.exports = { verifyToken };