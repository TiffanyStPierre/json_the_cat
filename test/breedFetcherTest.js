// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error message for a valid breed, via callback', (done) => {
    fetchBreedDescription('apple', (err, desc) => {
      // we expect an error for this scenario
      assert.equal(null, err);

      const expectedErr = "Error fetch details: TypeError: Cannot read property 'description' of undefined at Request._callback (/home/labber/api/json_the_cat/breedFetcher.js:11:32 at Request.self.callback (/home/labber/api/json_the_cat/node_modules/request/request.js:185:22) at Request.emit (events.js:315:20) at Request.<anonymous> (/home/labber/api/json_the_cat/node_modules/request/request.js:1154:10) at Request.emit (events.js:315:20) at IncomingMessage.<anonymous> (/home/labber/api/json_the_cat/node_modules/request/request.js:1076:12) at Object.onceWrapper (events.js:421:28) at IncomingMessage.emit (events.js:327:22) at endReadableNT (_stream_readable.js:1220:12)at processTicksAndRejections (internal/process/task_queues.js:84:21)";

      // compare returned error
      assert.equal(expectedErr, err);

      done();
    });
  });
});