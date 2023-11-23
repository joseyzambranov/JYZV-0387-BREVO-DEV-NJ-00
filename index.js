const axios = require('axios');
require('dotenv').config();

let apikey = process.env.API_KEY
const options = {
  method: 'GET',
  url: `https://api.brevo.com/v3/contacts`,
  headers: {'Content-Type': 'application/x-www-form-urlencoded',"api-key": apikey}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });