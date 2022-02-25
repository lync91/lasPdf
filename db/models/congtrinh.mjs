import db from "../db.mjs";
import { Model, DataTypes } from "sequelize";
const { STRING, DATE, DATEONLY, NUMBER } = DataTypes;
export default class Congtrinh extends Model { }
Congtrinh.init(
  {
    ten: STRING,
    diadiem: STRING,
    chudautu: STRING,
  },
  { sequelize: db, modelName: "congtrinh" }
);
(async () => {
  await db.sync();
  console.log('Congtrinh table synced!');
})();
