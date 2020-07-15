import { Controller } from 'egg';

/**
 * @controller Integral
 */
export default class IntegralsController extends Controller {

  /**
   * @summary 创建个人积分
   * @description 每次做完题提交成绩获取积分
   * @router put /api/integrals
   * @request query string name
   * @request query string openid
   * @request query double integrals
   * @response 200 Integrals 查询成功
   */
  public async create() {
    const { ctx, service } = this;
    const name: string = ctx.query.name;
    const openid: string = ctx.query.openid;
    const integrals: number = ctx.query.integrals;
    ctx.body = await service.integrals.update(name, openid, integrals);
  }

  /**
   * @summary 查询个人积分
   * @description 查询个人积分
   * @router get /api/integrals/{name}
   * @request path string name
   * @response 200 Integrals 查询成功
   */
  public async queryIntegral() {
    const { ctx, service } = this;
    ctx.body = await service.integrals.queryIntegral(ctx.params.name);
  }

}
