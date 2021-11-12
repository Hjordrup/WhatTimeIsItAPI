const express = require('express');
const router = express.Router();
const { getDate } = require('../public/javascripts/danishTimeAndDate');
router.get('/', (req, res) => {
  res.json({
    date: getDate(),
  });
});

module.exports = router;
