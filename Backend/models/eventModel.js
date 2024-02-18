const connection = require("../database/index.js");

module.exports = {
getAll: (callback) => {
  const query = "SELECT * FROM events";
  connection.query(query, (err, results) => {
    callback(err, results);
  });
},
addOne: (event, callback) => {
  const sql = 'INSERT INTO events SET image_url=?';
  const values = [ event.image_url];
  connection.query(sql, values, (err, results) => {
    callback(err, results);
  });
}
}