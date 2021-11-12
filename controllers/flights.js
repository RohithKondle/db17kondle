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
 
/*
// Handle Flight update form on PUT. 
exports.flight_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Flight update PUT' + req.params.id); 
}; */

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
 
// Handle Costume create on POST. 
exports.flight_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Flights(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.flightType = req.body.flightType;
    console.log(document.flightType)
    document.price = req.body.price; 
    document.capacity = req.body.capacity; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Flight. 
exports.flight_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Flights.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};


exports.flight_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Flights.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.flightType)  
               toUpdate.flightType = req.body.flightType; 
        if(req.body.price) toUpdate.price = req.body.price; 
        if(req.body.capacity) toUpdate.capacity = req.body.capacity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 