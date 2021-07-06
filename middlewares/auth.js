/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken');
const fs = require('fs');
const httpStatus = require('http-status');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');
const { roleRights } = require('../config/roles');

const JWT_PK = fs.readFileSync('./public.key', 'utf8');

const verifyOptions = {
  expiresIn: config.jwt.exp_in_min,
  algorithm: 'RS256',
};
// will use it later
const verifyCB = (req, resolve, reject, requiredRights) => async (
  err,
  user,
) => {
  if (err || !user) {
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
  }

  req.user = user;

  if (requiredRights.length) {
    const userRights = roleRights.get(user.role[0].type);
    console.log('🚀 ~ file: auth.js ~ line 31 ~ userRights', userRights);
    const hasRequiredRights = userRights
      ? requiredRights.every(requiredRight =>
          userRights?.includes(requiredRight),
        )
      : false;
    console.log(
      '🚀 ~ file: auth.js ~ line 35 ~ hasRequiredRights',
      hasRequiredRights,
    );
    if (!hasRequiredRights) {
      return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
    }
  }

  resolve();
};

exports.auth = (...requiredRights) => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      req?.headers?.authorization?.split(' ')[1],
      JWT_PK,
      verifyOptions,
      verifyCB(req, resolve, reject, requiredRights),
    );
  })
    .then(() => next())
    .catch(err => next(err));
};
