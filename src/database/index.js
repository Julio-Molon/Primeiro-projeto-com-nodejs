import Sequelize from 'sequelize';
import User from '../app/models/user';
import Files from '../app/models/Files';
import Appointment from '../app/models/Appointment';
import databaseConfig from '../config/database';

const models = [User, Files, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
