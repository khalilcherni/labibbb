const model = require("../models/materialsModel");

module.exports = {
    DELETE: (req, res) => {
        model.remove(req.params.id, (err, results) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(results);
          }
        });
      },
      getAllMaterials: (req, res) => {
        model.getAll((err, materials) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(materials);
          }
        });
      },
      addOneMaterial: (req, res) => {
        const material = req.body;
        model.addOne(material, (err, results) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(results);
          }
        });
      },
      updateMaterial: (req, res) => {
        const id = req.params.id;
        const updatedMaterial = req.body;
        model.update(id, updatedMaterial, (err, results) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(results);
          }
        });
      },
      getById: (req, res) => {
        const materialid = req.params.id;
        model.getOne(materialid, (err, result) => {
          if (err) {
            res.status(500).send(err);
          }  else {
              res.status(200).json(result);
            }
          })
      }

}