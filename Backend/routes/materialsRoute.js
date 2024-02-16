const express = require('express');
const controller = require('../controllers/materialscontroller');
const routes = express.Router();

routes.get("/get",controller.getAllMaterials);
routes.delete("/delete/:id",controller.DELETE);
routes.post("/add",controller.addOneMaterial);
routes.get("/get/:id",controller.getById); 
routes.put("/update/:id",controller.updateMaterial)
module.exports = routes;