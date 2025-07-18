const express = require('express');
const route = express.Router();
const { projectDisplay,displayblog } = require('../controller/displaycontroller');

route.get('/displayproject', projectDisplay)
route.get('/displayblog',displayblog)
module.exports = route;