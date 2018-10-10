'use strict';

let express = require('express');
let router = express.Router();
let TestController = require('./controller/TestController');

router.get('/human', TestController.getHuman);
router.post('/human', TestController.createHuman);


module.exports = router;
