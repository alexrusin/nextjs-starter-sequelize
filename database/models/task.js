/* eslint-disable no-unused-vars */
import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initTask = (sequelize, Types) => {
  class Task extends Model {}
  Task.init(
    {
      user_id: Types.INTEGER,
      description: Types.STRING,
      completed: Types.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return Task;
};

export default initTask(connection, DataTypes);
