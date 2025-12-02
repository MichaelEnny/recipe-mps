const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/auth');

// Note: Inconsistent with other routes - applies auth to all routes at router level
router.use(authenticateToken);

router.get('/profile', userController.getUserProfile);
router.put('/profile', userController.updateUserProfile);
router.get('/favorites', userController.getUserFavorites);
router.delete('/account', userController.deleteUser);

module.exports = router;