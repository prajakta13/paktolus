let router = require('express').Router();

var requestApiController = require('../controller/request-api-controller');

router.route('/zipcode')
    .get(requestApiController.consumeApi);


module.exports = router;