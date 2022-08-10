let request = require('request');



const fetchBreedDescription = function(breed, callback)  {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    
    const data = JSON.parse(body); // Changing the string JSON to an object

    if (data[0] === undefined || err) {
      callback(err, undefined);
    } else {
      callback(err, data[0]['description']);
    }
  });
};

module.exports = fetchBreedDescription;