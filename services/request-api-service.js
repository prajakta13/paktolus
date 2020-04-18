var requestModel = require('../model/request-api-model');

function saveService(){

}

saveService.prototype.saveRecord = function(requestservice,req,response){
    requestservice.save(function (err) {
        // Check for validation error
        if (err)
        response.status(405).json({
                "code":"",
                "exception" :err,
                "timestamp": new Date()});
        else
        response.status(201).send({
                //NO Content
            });
    });
};

module.exports = saveService;