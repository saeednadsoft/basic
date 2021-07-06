exports.groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    // eslint-disable-next-line no-param-reassign
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
