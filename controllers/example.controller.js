const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { exampleService } = require('../services');
// const pick = require('../utils/pick');

exports.createUser = catchAsync(async (req, res) => {
  const user = await exampleService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

exports.getUser = catchAsync(async (req, res) => {
  const user = await exampleService.getUser(req.body);
  res.status(httpStatus.OK).send(user);
});
