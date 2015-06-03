/**
 * Created by silasmartinez on 6/3/15.
 */
var sum = function(a, b){
    return a + b;
}

var div = function(a, b) {
    return a / b;
}

var remainder = function (a, b) {
    return a % b;
}

var average = function () {
    return Array.prototype.slice.call(arguments).reduce(function(a,cur){return cur + a},0) / arguments.length
}

var isPrime = function (n) {
    if (n < 2) return false;

    var q = parseInt(Math.sqrt (n));
    for (var i = 2; i <= q; i++) {
        if (n % i == 0)  return false;
    }
    return true;
}

module.exports = {
    sum: sum,
    div: div,
    remainder: remainder,
    average: average,
    isPrime: isPrime,
}
