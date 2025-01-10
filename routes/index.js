// Import the required modules
const express = require('express');

// Import the controllers
const AppController = require('../controllers/AppController');
const UsersController = require('../controllers/UsersController');
const AuthController = require('../controllers/AuthController');

// Create the router
const router = express.Router();

// Define the routes
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getStats);
router.get('/users/me ', UsersController.getStats);
// Define the route for creating a new user
router.post('/users', UsersController.postNew);

// Export the router
module.exports = router;
