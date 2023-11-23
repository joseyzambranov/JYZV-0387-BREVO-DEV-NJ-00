const axios = require('axios');
require('dotenv').config();

let apikey = process.env.API_KEY

let data = {
    "sender":{"email":"jose.zambrano@sinapsiscorp.com"},
    "to":[{"email":"joseyzambranovpe@gmail.com"}],
    "replyTo":{"email":"sender@example.com"},
    "textContent":"This is a transactional email",
    "subject":"Subject Line",
    "tags":["myFirstTransactional"]
    }

const options = {
  method: 'POST',
  url: 'https://api.brevo.com/v3/smtp/email',
  headers: {
    'accept': 'application/json',
    'api-key': apikey,
    'content-Type': 'application/json'
    
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