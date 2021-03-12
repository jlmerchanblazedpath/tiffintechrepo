module.exports = typeof module.exports === "undefined" ? {} : module.exports;
/**
 * gets geocode information from an address
 * @param {string} [addressInfo] - flex parameter that contains all the info by attributes
 * @param {string} googleMapApiKey - the google map api key for the environment
 * @return {list(NodeGeocoderGeocode)}
 */
module.exports.nodeGeocoderGetGeocode = function( addressInfo, googleMapApiKey ) {
    const NodeGeocoder = require('node-geocoder');
    const options = {
      provider: 'google',

      // Optional depending on the providers
      //fetch: customFetchImplementation,
      apiKey: googleMapApiKey, // for Mapquest, OpenCage, Google Premier
      formatter: null // 'gpx', 'string', ...
    };

    const geocoder = NodeGeocoder(options);

    // Using callback
    return geocoder.geocode(addressInfo);
}
/**
 * gets geocode information from an address
 * @param {any} [locationInfo] - flex parameter that contains all the info by attributes
 * @return {any}
 */
module.exports.getGeocode = function( locationInfo ) {
  
}
