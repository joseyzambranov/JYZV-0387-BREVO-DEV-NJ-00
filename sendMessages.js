const axios = require('axios');
require('dotenv').config();

let apikey = process.env.API_KEY

let data = {  
    "sender":{  
       "name":"Sender Alex",
       "email":"jose.zambrano@sinapsiscorp.com"
    },
    "to":[  
       {  
          "email":"joseyzambranovpe@gmail.com",
          "name":"John Doe"
       }
    ],
    "subject":"Hello world",
    "htmlContent":"<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo test 2.</p></body></html>"
 }

const options = {
  method: 'POST',
  url: 'https://api.brevo.com/v3/smtp/email',
  headers: {
    'accept': 'application/json',
    'Content-Type': ' application/json',
    'api-key': apikey
  },
  data: data,
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });