var Flights = require('../models/flights'); 
 
// List of all Flight

exports.flight_list = async function(req, res) { 
    try{ 
        theFlights = await Flights.find(); 
        res.send(theFlights); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific Flight. 
exports.flight_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Flight detail: ' + req.params.id); 
}; 
 
// Handle Flight create on POST. 
exports.flight_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Flight create POST'); 
}; 
 
// Handle Flight delete form on DELETE. 
exports.flight_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Flight delete DELETE ' + req.params.id); 
}; 
 
// Handle Flight update form on PUT. 
exports.flight_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Flight update PUT' + req.params.id); 
};

exports.flight_view_all_Page = async function(req, res) { 
    try{ 
        theFlights = await Flights.find(); 
        res.render('flight', { title: 'Flight Search Results', results: theFlights }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 