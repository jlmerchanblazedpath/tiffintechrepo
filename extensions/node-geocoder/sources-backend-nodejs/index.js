module.exports = typeof module.exports === "undefined" ? {} : module.exports;
/**
 * gets geocode information from an address
 * @param {string} [addressInfo] - flex parameter that contains all the info by attributes
 * @return {list(NodeGeocoderGeocode)}
 */
module.exports.nodeGeocoderGetGeocode = function( addressInfo ) {
    const NodeGeocoder = require('node-geocoder');
    const options = {
      provider: 'google',

      // Optional depending on the providers
      //fetch: customFetchImplementation,
      apiKey: 'AIzaSyA4aRFGcSF1kKOH-vy8zGt7xryaj3T3FWo', // for Mapquest, OpenCage, Google Premier
      formatter: null // 'gpx', 'string', ...
    };

    const geocoder = NodeGeocoder(options);

    // Using callback
    return geocoder.geocode(addressInfo);
}
