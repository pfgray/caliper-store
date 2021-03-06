const express = require('express');
const controller = require('./user.controller');
const passport = require('passport');
const auth = require('../../config/passport.js');

const router = express.Router();

router.post('/signup', controller.signup);
router.post('/login', passport.authenticate('local'), controller.login);
router.get('/me', auth.isLoggedIn, controller.currentUser);
router.get('/buckets', auth.isLoggedIn, controller.buckets);
router.post('/buckets', auth.isLoggedIn, controller.createBucket);
router.get('/buckets/:bucketId', auth.isLoggedIn, controller.getBucket);
router.delete('/buckets/:bucketId', auth.isLoggedIn, controller.deleteBucket);
router.get('/users', auth.hasRole('admin'), controller.listAll);
router.delete('/users/:userId', auth.hasRole('admin'), controller.deleteUser);

// todo: also allow users to update their own password?
router.put('/users/:userId/password', auth.hasRole('admin'), controller.changePassword);

module.exports = router;
