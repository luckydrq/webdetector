# Web detector for nodejs

## Example

```javascript
var detector = require('webdetector');
var http = require('http');

http.createServer(function(req, res) {
  var userAgent = req.headers['user-agent'];
  console.log(detector.supportWebp(ua));
  // bla bla bla
}).listen(3000);
```

## API

### supportWebp(userAgent)

#### params:

- userAgent: user agent string

#### return:

- Boolean(true or false)

