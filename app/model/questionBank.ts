import { Application } from 'egg';
export default (app: Application) => {
  const { STRING, INTEGER } = app.Sequelize;
  const QuestionBank = app.model.define('questionbank', {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic: {
      type: INTEGER,
      allowNull: true
    },
    question_type: {
      type: INTEGER,
      allowNull: true
    },
    question: {
      type: STRING(200),
      allowNull: true
    },
    optionA: {
      type: STRING(200),
      allowNull: true
    },
    optionB: {
      type: STRING(200),
      allowNull: true
    },
    optionC: {
      type: STRING(200),
      allowNull: true
    },
    optionD: {
      type: STRING(200),
      allowNull: true
    },
    answer: {
      type: STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'questionbank',
    freezeTableName: true,  //取消在表后面添加s复数
    timestamps: false  //取消create_time和update_time
  });
  return class extends QuestionBank { };
};