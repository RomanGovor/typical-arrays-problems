
exports.min = function min (array) {
    return array === undefined || array[0] === undefined ? 0 : array.sort(function sub(a,b) { return a - b; })[0];
}

exports.max = function max (array) {
    return array === undefined || array[0] === undefined  ? 0 :  array.sort(function sub(a,b) { return a - b; })[array.length - 1];
}

exports.avg = function avg (array) {
  return array === undefined || array[0] === undefined ? 0 : array.reduce((acc, a) => acc + a)/array.length;
}
