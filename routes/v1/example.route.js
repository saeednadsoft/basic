const express = require('express');
const validate = require('../../middlewares/validate');
const { auth } = require('../../middlewares/auth');

const router = express.Router();
const { exampleController } = require('../../controllers');
const { examplevalidation } = require('../../validations');
const { routePermissions } = require('../../constants');

/* GET users listing. */
router
  .route('/')
  // post request
  .post(
    auth(routePermissions.exampleRoute.MANGE),
    validate(examplevalidation.exampleValidation),
    exampleController.createUser,
  )
  // get user
  .get(exampleController.getUser);

module.exports = router;
