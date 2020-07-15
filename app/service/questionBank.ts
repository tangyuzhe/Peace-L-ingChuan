import { Service } from 'egg';
import { Code } from '../middleware/code';
/**
 * QuestionBank试题库
 */
export default class QuestionBankService extends Service {

  /**
   * 创建题目
   * @param question
   */
  public async create(question: any) {
    const { ctx } = this;
    try {
      const res: any = await ctx.model.QuestionBank.create(question);
      return Object.assign({}, Code.Add.SUCCESS, {
        data: res,
      });
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }


  /**
   * 列出指定的试题
   * @param id
   * @param topic
   * @param question_type
   */
  public async show(id: number, topic: number, question_type: number) {
    const { ctx } = this;
    const query: any = {
      attributes: ['id', 'topic', 'question_type', 'question', 'optionA', 'optionB', 'optionC', 'optionD'],
      where: {},
    };
    try {
      if (id) {
        query.where.id = id;
      }
      if (topic) {
        query.where.topic = topic;
      }
      if (question_type) {
        query.where.question_type = question_type;
      }
      const res: any = await ctx.model.QuestionBank.findAll(query);
      if (res.length === 0) {
        return Object.assign({}, Code.Find.ERROE);
      }
      if (res.length !== 0) {
        return Object.assign({}, Code.Find.SUCCESS, {
          data: res,
          total: res.length,
        });
      }
    } catch (error) {
      ctx.status = 1000;
      throw (error);
    }
  }


  /**
   * 查询题目答案
   * @param id
   */
  public async findAnswer(Id: number) {
    const { ctx } = this;
    const res: any = await ctx.model.QuestionBank.findOne({
      attributes: ['answer'],
      where: {
        id: Id,
      },
    });
    if (!res) {
      return Object.assign({}, Code.Find.ERROE);
    }
    if (res) {
      return Object.assign({}, Code.Find.SUCCESS, {
        data: res,
      });
    }
  }
}
