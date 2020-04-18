var requestService = require('../services/request-api-service');
var requestModel = require('../model/request-api-model');
var axios = require('axios');
var saveRecords = new requestService();
var requestservice = new requestModel();
// var data = '';

const headers = {
    'Content-Type': 'application/json',
    'access_token': 'ZiPcoDeDetAiLs',
  };

exports.consumeApi = function(){
    var url ="http://lms.labyrinthelab.com/api/ws_get_zipcode_details.php";



// save the profile and check for errors
function requestApi() {

    return axios.get(url,{
        params : {
            "zipcode": 33186
        }
    },{ headers }).then((response) => {
          console.log("response ::: ",response.data);
      },(err) => {
        console.log("error ::: ",err);
      }).catch((error) => {
          console.log("error ::: ",error)
      })
  }
        
  requestApi().then(data => {
      console.log("data ::: ", data);
      requestservice.state_id = data.RESPONSE_DATA.state_id;
      requestservice.city_name = data.RESPONSE_DATA.city_name;
      requestservice.city_id = data.RESPONSE_DATA.city_id;
      requestservice.state_name = data.RESPONSE_DATA.state_name;
      requestservice.country_id = data.RESPONSE_DATA.country_id;
      requestservice.country_name = data.RESPONSE_DATA.country_name;
      requestservice.file_url = data.RESPONSE_DATA.file_url;
            saveRecords.saveRecord(requestservice,req,res);
        })
    }