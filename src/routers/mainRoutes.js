const express = require('express');
const router = express.Router();

let mainControllers = require('../controllers/mainCrontrollers');
let mainControllerDb = require('../controllers/mainControllerDb');



router.get('/', mainControllerDb.index);
router.get('/nosotros', mainControllerDb.nosotros)


module.exports = router;