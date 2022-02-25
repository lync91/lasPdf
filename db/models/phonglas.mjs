import db from "../db.mjs";
import { Model, DataTypes } from "sequelize";
const { STRING, DATE, DATEONLY, NUMBE, INTEGER } = DataTypes;
export default class PhongLas extends Model { }
PhongLas.init(
  {
    ten: STRING,
    diachi: STRING,
    congty: INTEGER,
    truongphong: STRING,
    dienthoai: STRING,
    fax: STRING,
  },
  { sequelize: db, modelName: "phonglas" }
);
(async () => {
  await db.sync();
  console.log('Phonglas table synced!');
})();
