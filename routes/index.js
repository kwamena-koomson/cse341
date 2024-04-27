const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');


routes.get('/', lesson1Controller.yvonneRoute);
routes.get('/kwamena', lesson1Controller.kwamenaRoute);
routes.get('/kofi', lesson1Controller.kofiRoute);


module.exports = routes;

