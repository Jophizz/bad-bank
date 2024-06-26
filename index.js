var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');
const e = require('express');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {

    // check if account exists
    dal.create(req.params.name,req.params.email,req.params.password).
        then((user) => {

            // if user exists, return error message
    
                console.log(user);
                res.send(user);    
            });
        });


// find one user by email - alternative to find
app.get('/account/all', function (req, res) {

    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
}); 



var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);