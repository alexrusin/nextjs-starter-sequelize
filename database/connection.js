import Sequelize from 'sequelize';
import config from './config/config.mjs';

let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(config.production);
} else if (process.env.NODE_ENV === 'staging') {
  sequelize = new Sequelize(config.staging);
} else if (process.env.NODE_ENV === 'test') {
  sequelize = new Sequelize(config.test);
} else {
  sequelize = new Sequelize(config.development);
}

const connection = sequelize;

export default connection;
