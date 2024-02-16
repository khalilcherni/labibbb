const Event = require('../models/eventModel');

exports.create = async (req, res) => {
    try {
      const { image_url } = req.body;
      const id = await Event.create(image_url);
      res.status(201).json({ id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

exports.getAll = async (req, res) => {
  try {
    const events = await Event.getAll();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
