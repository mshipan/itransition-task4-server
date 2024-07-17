const express = require("express");
const router = express.Router();
const {
  getUsers,
  updateUserStatus,
  deleteUser,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, getUsers);
router.put("/status", authMiddleware, updateUserStatus);
router.delete("/", authMiddleware, deleteUser);

module.exports = router;
