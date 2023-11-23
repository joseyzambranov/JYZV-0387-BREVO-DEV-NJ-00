const axios = require('axios');
require('dotenv').config();

let apikey = process.env.API_KEY

let data = {
    "sender": {
      "name": "Mary from MyShop",
      "email": "jose.zambrano@sinapsiscorp.com"
    },
    "templateName": "Order Confirmation - EN",
    "subject": "Thanks for your purchase !",
    "htmlContent": "The order n°xxxxx has been confirmed. Thanks for your purchase"
  }

const options = {
  method: 'POST',
  url: 'https://api.brevo.com/v3/smtp/templates',
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