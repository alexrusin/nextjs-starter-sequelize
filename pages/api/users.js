import { Task, User } from '../../database/models';
import logger from '../../services/logger';

export default async function handler(req, res) {
  try {
    const task = await Task.findOne();
    if (task) {
      console.log('User for the task', await task.getUser());
    }

    const users = await User.findAll({
      attributes: ['first_name', 'last_name', 'email'],
      include: 'tasks',
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
