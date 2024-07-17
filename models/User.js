const db = require("../config/db");
const bcrypt = require("bcryptjs");

const User = {
  create: (userData, callback) => {
    const { name, email, password } = userData;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  },

  findByEmail: (email, callback) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  getAllUsers: (callback) => {
    const query =
      "SELECT id, name, email, last_login_time, registration_time, status FROM users";
    db.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },

  updateStatus: (id, status, callback) => {
    const query = "UPDATE users SET status = ? WHERE id = ?";
    db.query(query, [status, id], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  },

  deleteUser: (id, callback) => {
    const query = "DELETE FROM users WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  },

  updateLastLoginTime: (id, callback) => {
    const query = "UPDATE users SET last_login_time = NOW() WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  },
};

module.exports = User;
