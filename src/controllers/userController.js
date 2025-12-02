const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};

exports.updateUserProfile = async (req, res) => {
  // TODO: Implement user profile update
  // What fields should be updatable? username? email? password?
  res.status(501).json({ message: 'Profile update not implemented' });
};

exports.getUserFavorites = async (req, res) => {
  try {
    const favorites = await User.getFavorites(req.user.id);
    res.json(favorites);
  } catch (error) {
    // This will error because favorites aren't implemented
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  // TODO: Implement account deletion
  // Should this soft delete or hard delete?
  // Should it delete user's recipes too?
  res.status(501).json({ message: 'Account deletion not implemented' });
};