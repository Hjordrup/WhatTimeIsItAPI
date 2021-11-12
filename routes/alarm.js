const express = require('express');
const { findOneAndDelete } = require('../model/alarm');
const router = express.Router();
const Alarm = require('../model/alarm');

router.get('/', async (req, res) => {
  try {
    const alarms = await Alarm.find({});
    res.status(200).json({
      alarms,
    });
  } catch (error) {
    res.status(404).json({
      msg: error,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const alarm = await Alarm.create(req.body);
    res.status(200).json({
      alarm,
    });
  } catch (error) {
    res.status(404).json({
      msg: error,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id: alarmID } = req.params;
    const alarm = await Alarm.findByIdAndDelete({ _id: alarmID });
    if (!alarm) {
      return res.status(404).json({
        msg: 'No alarm with the given id',
      });
    }
    res.status(200).json({
      alarm,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id: alarmID } = req.params;
    const alarm = await Alarm.findOneAndUpdate(
      {
        _id: alarmID,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ alarm });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
});

module.exports = router;
