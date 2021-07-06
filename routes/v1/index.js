const express = require('express');

const router = express.Router();
const exampleRoute = require('./example.route');
const basicRoute = require('./basic.route');

/*
 ? add path and the contoller path in the deffault route
*/
const defaultRoutes = [
  {
    path: '/example-route',
    route: exampleRoute,
  },
  {
    path: '/basic',
    route: basicRoute,
  },
];

defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

module.exports = router;
