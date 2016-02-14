var express = require('express');
var router = express.Router();
var Bus = require('../lib/bus');
var bus = new Bus();

router.get('/heartbeat', function (req, res) {
  res.send();
});

router.post('/',
  function (req, res, next) {
    var abuse = {
      url: req.body.url,
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment
    };

    // emit event
    bus.publishAbuse(abuse, function (err) {
      if (err) {
        return next(err);
      }
      return res.end();
    });
  });

module.exports = router;
