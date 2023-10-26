const request = require('request');
const args = process.argv;
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const searchParameter = args[2];


request(`${url}${searchParameter}`, (error, response, body) => {
  if (error) {
    console.log('Sorry, there was an error with this request', error);
  } else {
    try {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log('Sorry, data for that breed was not found. Please try another breed.');
      } else {
        console.log('Weight:', data[0].weight);
      }
    } catch (dataError) {
      console.log('Data error:', dataError);
    }
  }
});