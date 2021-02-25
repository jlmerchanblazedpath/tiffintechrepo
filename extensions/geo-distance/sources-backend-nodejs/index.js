module.exports = typeof module.exports === "undefined" ? {} : module.exports;
/**
 * gets distance between two geolocations
 * @param {GeoDistanceLocation} loc1 - the source point
 * @param {GeoDistanceLocation} loc2 - the target location
 * @param {string} [unit] - unit of the distance
 * @return {decimal}
 */
module.exports.geoDistanceGetDistance = function( loc1, loc2, unit ) {
  var Distance = require('geo-distance');
  var loc1toloc2 = Distance.between(loc1, loc2);
  if(unit) {
    return loc1toloc2.human_readable_in_units(unit).distance;
  } else {
    return loc1toloc2.human_readable_in_units('mi').distance;
  }
}
