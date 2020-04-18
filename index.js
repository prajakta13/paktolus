const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var config = require('./env_config/local')
var requestAPIRoutes = require('./routes/request-api-routes');
const connectString = 'mongodb+srv://prajakta:pracz6589!!@cluster0-akwti.mongodb.net/test?retryWrites=true&w=majority';

var app = express();

app.set('env', config.env);
app.set('port', config.port);
app.set('hostname', config.hostname);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect(connectString,
    { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    },
    
).then(res => {
    console.log("successfully connected to database");
},
(err) => {
    console.log("Error while connecting to database");
});

app.use('/api',requestAPIRoutes);

let hostname = app.get('hostname'),
port = app.get('port');

app.listen(port, function () {
    console.log('Express server listening on - http://' + hostname + ':' + port);
});