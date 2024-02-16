const connection = require("../database/index.js");


class event {
    static create(image_url, callback) {
        const sql = 'INSERT INTO events (image_url) VALUES (?)';
        connection.query(sql, [image_url], (err, result) => {
          if (err) {
            console.error('Error saving image URL:', err);
            callback(err);
            return;
          }
          console.log('Image URL saved to database');
          callback(null, result.insertId);
        });
      }

  static getAll(callback) {
    const sql = 'SELECT * FROM events';
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching event:', err);
        callback(err);
        return;
      }
      callback(null, results);
    });
  }
}

module.exports = event;