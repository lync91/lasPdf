import db from "../db.mjs";
import { Model, DataTypes } from "sequelize";
const { STRING, DATE, DATEONLY, NUMBER, INTEGER } = DataTypes;
export default class Nhansu extends Model { }
Nhansu.init(
  {
    ten: STRING,
    donvi: INTEGER,
    chucvu: STRING,
    trinhdo: STRING,
    bangcap: STRING
  },
  { sequelize: db, modelName: "nhansu" }
);
(async () => {
  await db.sync();
  console.log('Nhansu table synced!');
})();
