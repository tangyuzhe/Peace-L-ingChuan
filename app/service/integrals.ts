import { Service } from 'egg';
import { Code } from '../middleware/code';
/**
 * Integrals 个人积分
 */
export default class IntegralsService extends Service {

  /**
   * 修改个人积分
   * @param Name
   * @param Openid
   * @param Integrals
   */
  public async update(Name: string, Openid: string, Integrals: number) {
    const { ctx } = this;
    const data: any = await ctx.model.Integrals.findOne({
      where: {
        name: Name,
      },
    });
    const query: any = {};
    if (Openid) {
      query.openid = Openid;
    }
    if (Integrals) {
      query.integrals = Integrals;
    }
    if (!data) {
      return Object.assign({}, Code.Find.ERROE);
    }
    if (data) {
      const res: any = await ctx.model.Integrals.update(query, {
        where: {
          name: Name,
        },
      });
      if (!res) {
        return Object.assign({}, Code.Update.ERROE);
      }
      if (res) {
        return Object.assign({}, Code.Update.SUCCESS, {
          data: res,
        });
      }
    }
  }


  /**
   * 查询个人积分
   * @param Name
   */
  public async queryIntegral(Name: string) {
    const { ctx } = this;
    const res: any = await ctx.model.Integrals.findOne({
      attributes: ['integrals'],
      where: {
        name: Name,
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
