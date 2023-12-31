const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(`${url}${breedName}`, (error, response, body) => {
    try {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    } catch (error) {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };