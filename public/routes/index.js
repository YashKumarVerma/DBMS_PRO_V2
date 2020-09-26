const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('home'));

// Dashboard
router.get('/searchTrain', ensureAuthenticated, (req, res) =>
  res.render('searchTrain', {
    user: req.user
  })
);

module.exports = router;
