let request = require('request');

let userInputBreeds = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/images/search?breed_id=${userInputBreeds[0]}`, (err, res, body) => {
  if (err) {
    return console.error(err);
  }
  console.log(body); // currently a string
  
  const data = JSON.parse(body); // Changing the string JSON to an object
  if (data[0] === undefined) {
    return console.error("Search term could not be located");
  }
  console.log(data);
  console.log(data[0]['url']);
});