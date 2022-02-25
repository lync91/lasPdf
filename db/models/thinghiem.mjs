import db from "../db.mjs";
import { Model, DataTypes } from "sequelize";
const { STRING, DATE, DATEONLY, INTEGER } = DataTypes;
export default class Congtrinh extends Model { }
Congtrinh.init(
  {
    congtrinh: INTEGER,
    hopdong: INTEGER,
    donvitn: INTEGER,
    goithau: STRING,
    chudautu: INTEGER,
    nhathau: INTEGER,
    giamsat: INTEGER
  },
  { sequelize: db, modelName: "thinghiem" }
);
(async () => {
  await db.sync();
  console.log('Thinghiem table synced!');
})();
