import { Application } from 'egg';
export default (app: Application) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Score = app.model.define('score', {
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
    address: {
      type: STRING(50),
      allowNull: true
    },
    score: {
      type: INTEGER,
      allowNull: true
    },
    time: {
      type: DATE,
      allowNull: true
    },
    openid: {
      type: STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'score',
    freezeTableName: true,  //取消在表后面添加s复数
    timestamps: false  //取消create_time和update_time
  });
  return class extends Score { };
};