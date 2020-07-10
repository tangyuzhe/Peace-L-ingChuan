import { Controller } from 'egg';

/**
 * @controller Score 
 */
export default class ScoreController extends Controller {

  /**
   * @summary 创建成绩
   * @description 提交测试题存取成绩
   * @router post /api/score
   * @request body Score *body
   * @response 200 Score 创建成功
   */
  public async create() {
    const { ctx, service } = this;
    ctx.body = await service.score.create(ctx.request.body);
  }


  /**
   * @summary 查询
   * @description 查询测试成绩
   * @router get /api/score/{name}
   * @request path string name
   * @response 200 Score 查询成功
   */
  public async QueryScore() {
    const { ctx, service } = this;
    ctx.body = await service.score.queryScore(ctx.params.name);
  }

}
