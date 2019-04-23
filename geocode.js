const request = require('request');

var geocodeAddress = (address,callback) => {
  var encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCgE5yoc53iTgh1J4jd-IboVIboNUWEcJI`,
    json: true
  },
  (error,response,body) => {
    if(error){
      callback('Unable to connect to google.');
    }else if (body.status === 'ZERO RESULTS') {
      callback('unable to find that Address.');
    }else if (body.status === 'OK') {
      callback(undefined,{
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};
module.exports.geocodeAddress= geocodeAddress;
