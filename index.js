const fetchBreedDescription = require('./breedFetcher');

let userInputBreeds = process.argv.slice(2);

fetchBreedDescription(userInputBreeds, (error, desc) => {
  
  if (desc === undefined) {
    return console.error("Search term could not be located");
  }
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
