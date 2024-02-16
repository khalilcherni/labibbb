const express = require('express');
const cors = require("cors");

const eventController = require('../controllers/eventController');


const router = express.Router();
router.use(cors());


router.post('/add', eventController.create);
router.get('/get', eventController.getAll);

module.exports = router;
