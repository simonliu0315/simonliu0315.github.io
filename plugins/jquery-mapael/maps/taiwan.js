/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael
 *
 * Map of USA by state
 *
 * @source http://the55.net/_11/sketch/us_map
 *
 * @deprecated : this map will be definitely moved to 'mapael-maps' repository starting from the next major release (3.0.0).
 * You can use instead https://github.com/neveldo/mapael-maps/blob/master/usa/usa_state.js
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";

    $.extend(true, Mapael,
        {
			console.log('Mapael');
            maps :{
                taiwan : {
                    width : 959,
                    height : 500,
                    latLngToGrid: function(lat, lng, phi1, phi2, midLng, scale) {
                        var pi =Math.PI;
                        var midLat = (phi1 + phi2) / 2;
                        var n, tmp1, tmp2, tmp3, x, y, p;

                        n = (Math.sin(phi1 / 180 * pi) + Math.sin(phi2 / 180 * pi)) / 2;
                        tmp1 = Math.sqrt(Math.cos(phi1 / 180 * pi)) + 2 * n * Math.sin(phi1 / 180 * pi);
                        tmp2 = scale * Math.pow(tmp1 - 2 * n * Math.sin(midLat / 180 * pi),0.5) / n;
                        tmp3 = n * (lng - midLng);
                        p = scale * Math.pow(tmp1 - 2 * n * Math.sin(lat / 180 * pi),0.5) / n;
                        x = p * Math.sin(tmp3 / 180 * pi);
                        y = tmp2 - p * Math.cos(tmp3 / 180 * pi);

                        return([x,y]);
                    },
                    getCoords : function (lat, lon) {
                        var coords = {},
                            xOffset,
                            yOffset,
                            scaleX,
                            scaleY,
                            phi1,
                            phi2,
                            midLng,
                            scale;
                        if(lat > 51) { // alaska
                            phi1= 15;
                            phi2= 105;
                            midLng = -134;
                            scale = 530;
                            coords = this.latLngToGrid(lat, lon, phi1, phi2, midLng, scale);
                            xOffset = 190;
                            yOffset = 543;
                            scaleX= 1;
                            scaleY= -1;

                        } else if (lon < -140) { // hawaii
                            phi1= 0;
                            phi2= 26;
                            midLng = -166;
                            scale = 1280;
                            coords = this.latLngToGrid(lat, lon, phi1, phi2, midLng, scale);
                            xOffset = 115;
                            yOffset = 723;
                            scaleX= 1;
                            scaleY= -1;
                        } else {
                            xOffset = -17;
                            yOffset = -22;
                            scaleX = 10.05;
                            scaleY = 6.26;

                            coords[0] = 50.0 + 124.03149777329222 * ((1.9694462586094064-(lat* Math.PI / 180)) * Math.sin(0.6010514667026994 * (lon + 96) * Math.PI / 180));
                            coords[1] = 50.0 + 1.6155950752393982 * 124.03149777329222 * 0.02613325650382181 - 1.6155950752393982* 124.03149777329222 * (1.3236744353715044- (1.9694462586094064-(lat* Math.PI / 180)) * Math.cos(0.6010514667026994 * (lon + 96) * Math.PI / 180));
                        }
                        return {x : (coords[0] * scaleX + xOffset), y : (coords[1] * scaleY + yOffset)};
                    },
                    elems : {
                        "Kinmen" : "M181.2 423.5l0 0.1-1.1-0.4-0.3-0.4 0.2-0.4 0.4-0.8-1.3-0.9-0.2-0.3-0.1-0.1-2.5-1.9-1.8-1.9-2.7 1-1.3 1.6 0.2 0.7-0.1 0.6-0.3 0.2-0.3-0.1-0.4 2.4-5 5.9-11.4-4.1 0.2 1-0.2 1-0.3 0.1 1.1 1.1-0.4 8.2-3.3 2.6 2.5 2.7-1.4-0.6-1.9-0.2-1.7-0.7-0.9-1.5 0.3-0.6 1.6-1.9 0.5-1 0.1-1.4 0-1.8-0.6-3.1-1.2-3-0.2-1.6 1.1-0.6 5.5-2.7 7.2 4.7 5-0.6 0.8-6.3 1.7-3.9 5.3-1.1 5.2 4.7 2 5.3z m0.2 10.5l0.3-2.1 0.3 0-0.2 1.7-0.4 0.4z m0.9-5l-1-3 0.1-0.7 0.3-0.4 0.8 2.4-0.2 1.7z",
                        "Penghu" : "M406.3 605.4l3.4 6.2 0.9 2.9-0.4 2.2-1.4-1.4-1.9-1.3-2-0.4-2.8 1.6-2.1 0.3-1 0.5-0.5 1.1-0.8 2.9-0.5 0.9-3.4 2-3.4 0.5-3.5-1.4-3.5-3.5 0.9-1.8 1.9 2.3 2.9 0.6 3.1-0.8 2.6-2.1-1.8-0.7-1.4-0.8-1.1-1.2-1-1.6-0.4 0.7 0 0.2-0.2 0.2-0.7 0.4-0.2-2.9 0.2-2.9 1.3 0 1.5 0.4 5.3-3.4 3.4-1.1-0.9 3.2-0.4 0.9 2.9-0.9 2.2 0.3 1.6-0.2 1.2-1.9z",
                        "Matsu Islands" : "M471.2 47.6l0.1 0.6-0.3 0-0.7 0.1-0.5 0.1-0.1-0.9 0.3-0.4 0.1-0.1-0.1-0.3-0.1 0-0.1-0.1 0.4-0.5 0.2-0.1 0.4-0.2 0.2-0.3 0.6 1.3-0.6 0.7 0.2 0.1z m-12.4 22.5l-0.1-0.3-0.2 0.5 0.2 0.7 0.3 0.3 0.3 0.1 0.4 0.1 0.3 0 0.5 0.1 0.3 0.2 0.1 0.5 0.2-0.3 0.6-0.1 0.4-0.3 0.3-0.2 0-0.5 0.1-0.5 0.6-0.7 0.1 0 0.2-0.1 0.6 0.1 0.5 0 0.3 0.1 0.1 0 0.5 0 0.7 0.1 0.8-0.5 0 0.3-0.3 0.3-0.2 0.4-0.3 0-0.2 0.2-0.2 0.4 0 0.5-0.1 0.3 0 0.1-0.3 0.4-0.3 0.5-0.1 0.1-0.3 0.2-0.2-0.4-0.2 0-0.7 0.1-0.2 0.3-0.4 0.6-1 1-0.2 0-0.4-0.3-0.7-0.1-0.6 0.1-0.2 1.2-0.2 0.1-0.7 0.1-0.1-0.3-0.4-0.5-0.2-0.2-0.5 0.1-0.6 0.1-0.9-0.3-0.3-1 0.3-0.6 0.4-0.3 0.4-0.4 0.3-0.7-0.7-0.5 0.4-0.5 0.4 0 0.2 0 0.1-0.5-0.5-0.8 0-0.8 0.3-0.4 0.4 0 0.3 0.4 0.3 0.1 0.1 0 0.1 0 0.5 0.3-0.3 0.9-0.1 0.2z m12.6-10.9l-0.4 0-0.6 0-1.1-0.3-0.4 0.7-0.4 0.1-0.2 0.2-0.3 0.4 0 0.7 0.2 0.7 0 0.6-0.2 0.9 0.1 0.4 0.3 0.1 0.1 0.3-0.5 0.2-0.9-0.2-0.5 0.2 0-1 0.1-1.5 0.3-1.4 0.3-0.5-0.2-0.4 0-0.6 0.1-0.2 1.1-0.1 0.5-0.6 0.5-0.2 0.6-0.3 1-0.9 0.3-1 0.5-0.3 0.6-0.1 0.4-0.3 0.6 0.1 0.1 0.5 0.3 0.4 0.1 0 0.3 0 0 0.9 0 0.9 0.7-0.7 0.2 0 0.6 0 0.1 0.1 0 0.3 0 0.9-0.7 0.2 0.1 0.5 0.3 0.2 0 0.3 0 0.7-0.5-0.7-0.2-0.7-0.5-0.7-0.7 0-0.5 0-0.3 0.2-0.4 0.3-0.5 0.1-0.4 0.6z m2.1-5.6l-0.4 0.2-0.3 0-0.7 0 0.1-0.7 0.7-0.2 0.1-0.4 0.7-0.1 0.7-0.2-0.9 1.4z",
                        "Taoyuan" : "M657.2 325.1l6.4-10.3 5-5.9 5.2-4.4 13.2-4.4 3.1-1.9 2.7-2.4 3.3-1.8 6.4-2.3 14.5-2.6 3 3.3 4.6 2.2 3.4 2.2 2.3 2.1 2.9 0.7 3.1 1.6 3.7 5.4 0.3 2.9-0.7 3-2.4 2.5-9.4 2.8-2.7 2.9 0.2 4.5-0.8 4.1 0.8 3.7 3.8 3.7 0.8 3.7-1 4.8 3.7 2.1 5.3-0.3 3.7 1.4 6 8.9-1 3.8-2.3 2.7 0.6 3.7 1 4.1 6.4 6 1.8 4-2.2 0.6-3.9 2.8 2.3 9-1.6 2.7-2.5 1-2.3-0.5-2.9 1.1-0.3 1.1-3.5-1.5-5.2-3-2.9-2.1-4-0.7-4.5-2.6-3.7-2.9-0.4-3.1 3.3-4.7 1.4-5.6-1.2-5.2-0.2-3.6-2.5-1.9-3.1-1.6-1.9-3.3-2.4-2.5-2.8 0.2-2.8-0.5-2.2-2.2-3-2.2-4.8-1.5-2.4-2.7 0.8-4.2-2.6-3-4.9-1.6-3-1.4-3.1-0.9-3.6-1.4-2.9-6.3-3.3-2.2-9.8 0.7-2.3-0.8z",
                    }
                }
            }
        }
    );

    return Mapael;

}));
