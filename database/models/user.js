/* eslint-disable no-unused-vars */
import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initUser = (sequelize, Types) => {
  class User extends Model {}
  User.init(
    {
      first_name: Types.STRING,
      last_name: Types.STRING,
      email: Types.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return User;
};

export default initUser(connection, DataTypes);
