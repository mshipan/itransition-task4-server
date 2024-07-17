const User = require("../models/User");

exports.getUsers = (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) {
      return res.status(500).json({ message: "Database query failed." });
    }
    res.status(200).json(users);
  });
};

exports.updateUserStatus = (req, res) => {
  const { id, status } = req.body;
  User.updateStatus(id, status, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to update user status" });
    }
    res.status(200).json({ message: "User status updated successfully" });
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.body;
  User.deleteUser(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to delete user" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  });
};
