const express = require('express');
const router = express.Router();
const { getTime } = require('../public/javascripts/danishTimeAndDate');

router.get('/', (req, res) => {
  res.json({
    klokken: getTime(),
  });
});

module.exports = router;
