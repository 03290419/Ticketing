require('dotenv').config();
const { DataSource } = require('typeorm');
const dataSource = new DataSource({
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  logging: true,
  bigNumberStrings: false,
  supportBigNumbers: true,
});

module.exports = {
  dataSource,
};
