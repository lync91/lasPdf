import db from "../db.mjs";
import { Model, DataTypes } from "sequelize";
const { STRING, DATE, DATEONLY, NUMBER } = DataTypes;
export default class Congty extends Model { }
Congty.init(
  {
    ten: STRING,
    diachi: STRING,
    daidien: STRING,
    chucvu: STRING,
    dienthoai: STRING,
    fax: STRING,
  },
  { sequelize: db, modelName: "congty" }
);
(async () => {
  await db.sync();
  console.log('Congty table synced!');
})();
