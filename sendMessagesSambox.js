const axios = require('axios');
require('dotenv').config();

let apikey = process.env.API_KEY

let data = {  
    "sender":{  
       "name":"Sender Alex",
       "email":"jose.zambrano@sinapsiscorp.com"
    },
    "headers": {
      "X-Sib-Sandbox": "drop"
    },
    "to":[  
       {  
          "email":"joseyzambranovpe@gmail.com",
          "name":"John Doe"
       }
    ],
    "htmlContent": "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>",
    "textContent": "Please confirm your email address by clicking on the link https://text.domain.com",
    "subject": "Login Email confirmation"
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