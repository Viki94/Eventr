/* globals module */

"use strict";

module.exports = {
    map(obj, ...props) {
        return props.reduce((mapped, prop) => {
            mapped[prop] = obj[prop];
            return mapped;
        }, {});
    }
};