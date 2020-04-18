var mongoose = require('mongoose');
// Setup schema

var requestApiSchema = mongoose.Schema({
    state_id : String,
    city_name: String,
    city_id: String,
    state_name : String,
    country_id : String,
    country_name : String,
    file_url : String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

var requestApi = module.exports = mongoose.model('requestapi', requestApiSchema);
module.exports.get = function (callback, limit) {
    requestApi.find(callback).limit(limit);
}