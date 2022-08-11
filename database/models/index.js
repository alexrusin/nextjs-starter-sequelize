import User from './user';
import Task from './task';

User.hasMany(Task, {
  foreignKey: 'user_id',
  as: 'tasks',
});

Task.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

export { User, Task };
