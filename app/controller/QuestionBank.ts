import { Controller } from 'egg';

/**
 * @controller QuestionBank
 */
export default class QuestionBankController extends Controller {

  /**
   * @summary 添加试题
   * @description 往试题库添加一道题目
   * @router post /api/question
   * @request body QuestionBank *body
   * @response 200 QuestionBank 创建成功
   */
  public async create() {
    const { ctx, service } = this;
    ctx.body = await service.questionBank.create(ctx.request.body);
  }

  /**
   * @summary 查询试题
   * @description 往试题库查询所需要的一道题目
   * @router get /api/question
   * @request query integer id
   * @request query integer topic
   * @request query integer question_type
   * @response 200 QuestionBank 查询成功
   */
  public async show() {
    const { ctx, service } = this;
    const id = ctx.query.id;
    const topic = ctx.query.topic;
    const question_type = ctx.query.question_type;
    ctx.body = await service.questionBank.show(id, topic, question_type);
  }

  /**
   * @summary 查询试题答案
   * @description 往试题库查询所需要的一道题目的答案
   * @router get /api/question/{id}
   * @request path integer id
   * @response 200 QuestionBank 查询成功
   */
  public async findAnswer() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    ctx.body = await service.questionBank.findAnswer(id);
  }
}
