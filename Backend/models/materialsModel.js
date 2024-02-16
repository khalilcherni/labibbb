const connection = require("../database/index");

module.exports = {
remove: (id, callback) => {
    const sql = "DELETE FROM materials WHERE id=?";
    connection.query(sql, [id], (err, results) => {
      callback(err, results);
    });
  },
  getAll: (callback) => {
    const query = "SELECT * FROM materials";
    connection.query(query, (err, results) => {
      callback(err, results);
    });
  },
  addOne: (material, callback) => {
    const sql = 'INSERT INTO materials SET name=?, image=?, description=?';
    const values = [material.name, material.image, material.description];
    connection.query(sql, values, (err, results) => {
      callback(err, results);
    });
  },
  update: (id, updatedMaterial, callback) => {
    const sql = "UPDATE materials SET name=?, image=?, description=?? WHERE id=?";
    const values = [updatedMaterial.name, updatedMaterial.image, updatedMaterial.description, id];
    connection.query(sql, values, (err, results) => {
      callback(err, results);
    });
  },
  getOne: (id, callback) => {
    const query = 'SELECT * FROM materials WHERE id=?';
    connection.query(query, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        if (result.length === 0) {
          callback(null, null);
        } else {
          callback(null, result);
        }
      }
    });
  }
};