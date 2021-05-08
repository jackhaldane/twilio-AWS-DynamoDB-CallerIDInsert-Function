exports.handler = function(context, event, callback) {

const endpointURL = 'https://testendpointREPLACEME.execute-api.eu-west-2.amazonaws.com/newitem/'; // define aws gateway endpoint url
const phoneNumber = event.callFrom; // get phone number from Twilio param


// check if caller is unknown
if (phoneNumber == "+266696687") {
    callback(null, "OK");
    
} else {

var got = require('got'); // required for got function
got(endpointURL + phoneNumber, {responseType: 'json'}) // send a https get request to aws api
  .then(function(response) {
     console.log(response.body) // debug
     console.log('add db request from ' + phoneNumber)

         callback(null, "OK"); // return success response to API - caller has been added to db

    
  })
  .catch(function(error) {
    callback(error) // return eror if timeout or other http error
  });
}


};

