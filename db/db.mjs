import { Sequelize, Model, DataTypes } from "sequelize";

const db = new Sequelize('namviet', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

export default db;