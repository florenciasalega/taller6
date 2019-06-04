var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//es un framework que corre sobre nodejs se llama express crea servidor donde corre la aplicacion localmente
//es el rutteo de la pagina por ejemplo localhost:3000/
