const request = require('request');

var getWeather = (lat,lng,callback) => {
  request({
    url:`https://api.darksky.net/forecast/4e6752e38cc1b72f59e574ac4f795b12/${lat},${lng}`,
    json:true
  },(error,response,body)=>{
    if(error){
      callback('Unable to connect to forecast.io servers.');
    }else if (response.statusCode===400) {
      callback('Unable to fech weather.');
    }else if (response.statusCode===200){
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
