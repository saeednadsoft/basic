const express = require('express');
const validate = require('../../middlewares/validate');
const { auth } = require('../../middlewares/auth');

const router = express.Router();
const { basicController } = require('../../controllers');
const { basicvalidation } = require('../../validations');
const { routePermissions } = require('../../constants');

/* GET users listing. */
router
  .route('/')
  // post request
  .post(
    //auth(routePermissions.basicRoute.MANGE),
    //validate(basicvalidation.basicvalidation),
    basicController.createUser,
  )
  // get user
  .get(basicController.getUser);

module.exports = router;
