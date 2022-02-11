import User from '../../database/models/user';

export default async function handler(req, res) {
  const users = await User.findAll({
    attributes: ['first_name', 'last_name', 'email'],
    limit: 100,
  });

  res.status(200).json({ users });
}
