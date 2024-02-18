const express = require('express');
const cors = require("cors");

const eventController = require('../controllers/eventController');


const router = express.Router();
router.use(cors());


router.post('/add', eventController.addOneevent);
router.get('/get', eventController.getAllevents);

module.exports = router;
