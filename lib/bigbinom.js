/*
 * bigbinom
 * https://github.com/sackio/bigbinom
 *
 * Copyright (c) 2014 Ben Sack
 * Licensed under the MIT license.
 */

'use strict';

var BigNumber = require('bignumber.js');

module.exports = function(n, k){
  if (k > n) return new BigNumber(0);
  if (n === k) return new BigNumber(1);
  if (k > n - k) k = n - k;

  var cf = new BigNumber(1);
  for (var i = 1; i <= k; i++){
    cf = cf.times(n--);
    cf = cf.dividedBy(i);
  }

  return cf;
};
