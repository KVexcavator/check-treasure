var express = require('express');
var router = express.Router();
// require main controller file
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;