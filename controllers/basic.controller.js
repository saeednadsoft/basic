const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { basicService } = require('../services');
// const pick = require('../utils/pick');

exports.createUser = catchAsync(async (req, res) => {
  const user = await basicService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

exports.getUser = catchAsync(async (req, res) => {
  const user = await basicService.getUser(req.body);
  res.status(httpStatus.OK).send(user);
});
