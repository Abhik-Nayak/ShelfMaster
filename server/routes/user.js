const express = require('express');

const router = express.Router();
const {
  createUser,
  userSignIn,
  getUser,
  uploadProfile,
  logOut,
  logOutAll
} = require('../controllers/user');
const { isAuth } = require('../middlewares/auth');
const {
  validateUserSignUp,
  userVlidation,
  validateUserSignIn,
  validateUserUpdate
} = require('../middlewares/validation/user');

const multer = require('multer');

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};
const uploads = multer({ storage, fileFilter });

router.post('/create-user', validateUserSignUp, userVlidation, createUser);
router.post('/sign-in', validateUserSignIn, userVlidation, userSignIn);
router.get('/get-user', isAuth, getUser);
router.post('/log-out', isAuth, logOut);
router.post('/log-out-all', isAuth, logOutAll);
router.post(
  '/upload-profile',
  isAuth,validateUserUpdate, userVlidation,
  // uploads.single('profile'),
  uploadProfile
);

module.exports = router;
