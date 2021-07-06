const path = require('path');
const Joi = require('joi');

// eslint-disable-next-line no-unused-expressions
process.env.NODE_ENV === 'development'
  ? require('dotenv').config({ path: path.join(__dirname, '../.env') })
  : require('dotenv').config({
      path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
    });
/*
const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'qa').required(),
    PORT: Joi.number().default(3000).description('app port'),
    APP_NAME: Joi.string().required().description('app name'),
    HOST: Joi.string().required().description('app host'),
    HASH_SECRET_KEY: Joi.string().required().description('JWT Secret Key'),
    JWT_ACCESS_EXP_MIN: Joi.string().required(),
    JWT_ACCESS_EXP_HR: Joi.string().required(),
    JWT_REFRESH_EXP_DAYS: Joi.string().required(),
    DATABASE_URL: Joi.string().required().description('DB URL'),
  })
  .unknown();


const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  appName: envVars.APP_NAME,
  host: envVars.HOST,
  jwt: {
    exp_in_min: envVars.JWT_ACCESS_EXP_MIN,
    ref_exp_in_days: envVars.JWT_REFRESH_EXP_DAYS,
  },
  hash: {
    secret: envVars.HASH_SECRET_KEY,
  },
};
*/

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  appName: process.env.APP_NAME,
  host: process.env.HOST,
  jwt: {
    exp_in_min: process.env.JWT_ACCESS_EXP_MIN,
    ref_exp_in_days: process.env.JWT_REFRESH_EXP_DAYS,
  },
  hash: {
    secret: process.env.HASH_SECRET_KEY,
  },
};
