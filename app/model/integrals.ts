import { Application } from 'egg';
export default (app: Application) => {
  const { STRING, INTEGER, DOUBLE } = app.Sequelize;
  const Integrals = app.model.define('integrals', {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(10),
      allowNull: true
    },
    openid: {
      type: STRING(100),
      allowNull: true
    },
    integrals: {
      type: DOUBLE(11, 2),
      allowNull: true
    }
  }, {
    tableName: 'integrals',
    freezeTableName: true,  //取消在表后面添加s复数
    timestamps: false  //取消create_time和update_time
  });
  return class extends Integrals { };
};