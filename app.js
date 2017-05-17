/**
 * Created by joseph on 12/04/17.
 */
const express = require('express'), //framework
	publicDir = express.static(`${__dirname}/public`), //public folder
	viewDir = `${__dirname}/views`,  //views folder
	bodyParser = require('body-parser'),

    routes = require('./routes'),
	port = (process.env.PORT || 3000); //port (http://IP:port)

let app = express(); //instance of app Express;

app
	.set('views', viewDir)
	.set('view engine', 'pug')
	.set('port', port)
	.use(publicDir)
	.use(bodyParser.urlencoded({extended:true}))
	.use(routes);

module.exports = app;
