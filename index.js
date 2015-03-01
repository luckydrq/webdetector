/**!
 * clb-webdetector - index.js
 *
 * Copyright(c) 2014 Alibaba Group Holding Limited.
 * Authors:
 *   雪卒 <ruoqi.drq@alibaba-inc.com> (http://github.com/luckydrq)
 */

'use strict';

/**
 * Module dependencies.
 */

mixin(exports, require('./lib/image'));

function mixin(a, b) {
  for (var prop in b) {
    if (b.hasOwnProperty(prop)) {
      a[prop] = b[prop];
    }
  }
}
