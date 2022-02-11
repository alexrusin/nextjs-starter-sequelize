import User from '../../database/models/user';
import logger from '../../services/logger';

export default async function handler(req, res) {
  try {
    const users = await User.findAll({
      attributes: ['first_name', 'last_name', 'email'],
      limit: 100,
    });
    res.status(200).json({ users });
  } catch (e) {
    logger.error(e.stack);
    res.status(400).json({
      error_code: 'get_users',
      message: e.message,
    });
  }
}
