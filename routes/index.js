const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Yvonne Agbakpe')
  })
  
  module.exports = routes;