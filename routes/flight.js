var express = require('express');
const flight_controlers= require('../controllers/flights'); 
var router = express.Router();

/* GET home page. */
router.get('/', flight_controlers.flight_list);

module.exports = router;