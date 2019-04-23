
const yargs = require('yargs');
const weather = require('./weather/weather.js');

const geocode= require('./geocode/geocode.js');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

geocode.geocodeAddress(argv.address,(errorMessage,results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(results.address);
    weather.getWeather(results.latitude,results.Longitude,(errorMessage,weatherResults)=>{
      if(errorMessage){
        console.log(errorMessage);
      }
      else {
        console.log(JSON.stringify(weatherResults,undefined,2));
      }
    });
  }
});
