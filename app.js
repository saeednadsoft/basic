/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-expressions
process.env.NODE_ENV === 'development'
  ? require('dotenv').config({ path: `${__dirname}/.env` })
  : require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const compression = require('compression');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require("mongoose")
const httpStatus = require('http-status');
const ApiError = require('./utils/ApiError');
const { errorConverter, errorHandler } = require('./middlewares/error');
const routes = require('./routes/v1');

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database
  mongoose
  .connect("mongodb+srv://root:qwer1234@cluster0.av00o.mongodb.net/BasicMongoDB", { // process.env.MONGO_URL
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
//

// enable cors TBU
app.use(cors());
app.options('*', cors());

app.use(
  compression({
    filter: shouldCompress,
    threshold: 1,
  }),
);

app.use(logger('dev'));

app.use(cookieParser());

app.use(routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});
// convert error to ApiError, if needed
app.use(errorConverter);
// handle error
app.use(errorHandler);

module.exports = app;
