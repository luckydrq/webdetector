/**!
 * webdetector - test/image.test.js
 *
 * Copyright(c) MIT.
 * Authors:
 *   luckydrq <drqzju@gmail.com> (http://github.com/luckydrq)
 */

'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var util = require('util');
var slice = Array.prototype.slice;
var supportWebp = require('..').supportWebp;

describe('image detector test', function() {
  it('should return false when ua is null', function() {
    var ua = null;
    assert(supportWebp(ua) === false);
  });

  it('should return false when ua is undefined', function() {
    var ua = undefined;
    assert(supportWebp(ua) === false);
  });

  it('should return false when ua is empty string', function() {
    var ua = '';
    assert(supportWebp(ua) === false);
  });

  describe('android', function() {
    it('should not support android 0.x', function() {
      var ua = makeAndroidUA(0, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support android 1.x', function() {
      var ua = makeAndroidUA(1, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support android 2.x', function() {
      var ua = makeAndroidUA(2, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support android 3.x', function() {
      var ua = makeAndroidUA(3, 1);
      assert(supportWebp(ua) === false);
    });
  });

  describe('chrome', function() {
    it('should not support chrome 0.x', function() {
      var ua = makeChromeUA(0, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 1.x', function() {
      var ua = makeChromeUA(1, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 2.x', function() {
      var ua = makeChromeUA(2, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 3.x', function() {
      var ua = makeChromeUA(3, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 4.x', function() {
      var ua = makeChromeUA(4, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 5.x', function() {
      var ua = makeChromeUA(5, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 6.x', function() {
      var ua = makeChromeUA(6, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 7.x', function() {
      var ua = makeChromeUA(7, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 8.x', function() {
      var ua = makeChromeUA(8, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 9.0.x', function() {
      var ua = makeChromeUA(9, 0, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 14.x', function() {
      var ua = makeChromeUA(14, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 15.x', function() {
      var ua = makeChromeUA(15, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support chrome 16.x', function() {
      var ua = makeChromeUA(16, 1);
      assert(supportWebp(ua) === false);
    });

    it('should support chrome 9.1.x', function() {
      var ua = makeChromeUA(9, 1, 1);
      assert(supportWebp(ua) === true);
    });

    it('should support other chrome', function() {
      var ua = makeChromeUA(10, 1, 1);
      assert(supportWebp(ua) === true);
      ua = makeChromeUA(40, 1, 1);
      assert(supportWebp(ua) === true);
    });
  });

  describe('android chrome', function() {
    it('should not support android chrome 1x.x', function() {
      var ua = makeAndroidChromeUA(10, 1);
      assert(supportWebp(ua) === false);
    });

    it('should not support android chrome 10.x', function() {
      var ua = makeAndroidChromeUA(20, 1);
      assert(supportWebp(ua) === false);
    });

    it('should support android chrome 21.x', function() {
      var ua = makeAndroidChromeUA(21, 1);
      assert(supportWebp(ua) === true);
    });
  });

  describe('opera', function() {
    it('should not support opera 10.x 1', function() {
      var ua = makeOperaV10UA1();
      assert(supportWebp(ua) === false);
    });

    it('should not support opera 10.x 2', function() {
      var ua = makeOperaV10UA2();
      assert(supportWebp(ua) === false);
    });

    it('should not support opera 11.0x 1', function() {
      var ua = makeOperaV11UA1();
      assert(supportWebp(ua) === false);
    });

    it('should not support opera 11.0x 2', function() {
      var ua = makeOperaV11UA2();
      assert(supportWebp(ua) === false);
    });
  });
});

function makeAndroidUA(v1, v2) {
  var version = slice.call(arguments).filter(function(v) { return v != null });
  var template = 'Mozilla/5.0 (Linux; U; Android %s; ja-jp; IS01 Build/S3082) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1';
  return util.format(template, version.join('.'));
}

function makeChromeUA(v1, v2, v3, v4) {
  var version = slice.call(arguments).filter(function(v) { return v != null });
  var template = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36';
  return util.format(template, version.join('.'));
}

function makeAndroidChromeUA(v1, v2) {
  var version = slice.call(arguments).filter(function(v) { return v != null });
  var template = 'Mozilla/5.0 (Linux; Android 4.4.4; MI 3 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36';
  return util.format(template, version.join('.'));
}

function makeOperaV9UA() {
  return 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/886; U; en) Presto/2.4.15';
}

function makeOperaV10UA1() {
  return 'Opera/10.50 (Windows NT 6.1; U; en-GB) Presto/2.2.2';
}

function makeOperaV10UA2() {
  return 'Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.5.22 Version/10.50';
}

function makeOperaV11UA1() {
  // 这个UA是伪造的，没查到有这种表示
  return 'Opera/11.01 (Windows NT 6.1; U; en-GB) Presto/2.2.2';
}

function makeOperaV11UA2() {
  return 'Opera/9.80 (Windows NT 6.0; U; en) Presto/2.7.39 Version/11.01';
}


