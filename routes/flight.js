var express = require('express');
const flight_controlers= require('../controllers/flights'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => {
    console.log(req)
    if (req.user){ 
      return next(); 
    }
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/', flight_controlers.flight_view_all_Page);

router.get('/detail', flight_controlers.flight_view_one_Page); 

router.get('/create',secured, flight_controlers.flight_create_Page); 

router.get('/update',secured,flight_controlers.flight_update_Page);

router.get('/delete',secured, flight_controlers.flight_delete_Page);

module.exports = router;