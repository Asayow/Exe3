const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    module.exports = response.data;
  })
  .catch((error) => {
    console.log(error);
  });
