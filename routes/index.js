/**
 * Created by joseph on 12/04/17.
 */
"use strict";

const express = require('express'),
	router = express.Router();

router
	.get('/admin/alumno', (req, res, next)=>{
        res.render('alumno');
    })
	.get('/admin/matricula', (req, res, next)=>{
        res.render('matricula');
    })


module.exports = router;