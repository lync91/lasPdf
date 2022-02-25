import db from "../db.mjs";
import { Model, DataTypes } from "sequelize";
const { STRING, DATE, DATEONLY, NUMBER } = DataTypes;
export default class User extends Model {
  async test() {
    await db.sync();
    const jane = await User.create({
      username: "janedoe",
      birthday: new Date(1980, 6, 20),
    });
    console.log(jane.toJSON());
  }
}
User.init(
  {
    username: STRING,
    password: STRING,
    fullname: STRING,
    daidien: STRING,
    chucvu: STRING,
    birthday: DATE,
    avatar: STRING,
  },
  { sequelize: db, modelName: "user" }
);
(async () => {
  await db.sync();
  console.log('User table synced!');
})();
