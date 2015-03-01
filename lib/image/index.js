/**!
 * webdetector - lib/image/index.js
 *
 * Copyright(c) MIT.
 * Authors:
 *   luckydrq <drqzju@gmail.com> (http://github.com/luckydrq)
 */

'use strict';

/**
 * Module dependencies.
 */

/**
 * 检测是否支持webp
 * @see https://github.com/igrigorik/webp-detect/blob/master/pagespeed.cc
 */
var WEBP_WHITE_LIST = [
  '*Android *',
  '*Chrome/*',
  '*Opera/9.80*Version/??.*',
  '*Opera???.*'
];
var WEBP_BLACK_LIST = [
  '*Android 0.*',
  '*Android 1.*',
  '*Android 2.*',
  '*Android 3.*',
  '*Chrome/0.*',
  '*Chrome/1.*',
  '*Chrome/2.*',
  '*Chrome/3.*',
  '*Chrome/4.*',
  '*Chrome/5.*',
  '*Chrome/6.*',
  '*Chrome/7.*',
  '*Chrome/8.*',
  '*Chrome/9.0.*',
  // Chrome 14, 15 and 16 had webp rendering bug.
  '*Chrome/14.*',
  '*Chrome/15.*',
  '*Chrome/16.*',
  // Clank v<21 had webp endianness bug.
  '*Android *Chrome/1?.*',
  '*Android *Chrome/20.*',
  '*Opera/9.80*Version/10.*',
  '*Opera?10.*',
  '*Opera/9.80*Version/11.0*',
  '*Opera?11.0*'
];

function toRegex(glob) {
  return new RegExp(glob.replace(/\./g, '\\.')
    .replace(/\//g, '\\/')
    .replace(/\*/g, '.*')
    .replace(/\?/g, '.'));
}

function whiteListed(userAgent) {
  for (var i = 0; i < WEBP_WHITE_LIST.length; i++) {
    var s = WEBP_WHITE_LIST[i];
    if (toRegex(s).test(userAgent)) {
      return true;
    }
  }
  return false;
}

function blackListed(userAgent) {
  for (var i = 0; i < WEBP_BLACK_LIST.length; i++) {
    var s = WEBP_BLACK_LIST[i];
    if (toRegex(s).test(userAgent)) {
      return true;
    }
  }
  return false;
}

exports.supportWebp = function supportWebp(userAgent) {
  if (!userAgent) return false;
  if (blackListed(userAgent)) return false;
  if (whiteListed(userAgent)) return true;
  return false;
};
