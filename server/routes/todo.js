const express = require('express');

const router = express.Router();
const { isAuth } = require('../middlewares/auth');
const { createItem, getItem,deleteItem } = require('../controllers/todo')
const {
    userVlidation,
    validateUserSignIn,
  } = require('../middlewares/validation/user');
router.post("/create-todo",isAuth, createItem);
router.get("/read-todo",isAuth, getItem);
router.post("/delete-todo", isAuth, deleteItem)

module.exports = router;