const Event = require('../models/eventModel');

module.exports={
  getAllevents: (req, res) => {
    Event.getAll((err, eventss) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(eventss);
      }
    });
  },
  addOneevent: (req, res) => {
    const event = req.body;
    Event.addOne(event, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  }
}
  


