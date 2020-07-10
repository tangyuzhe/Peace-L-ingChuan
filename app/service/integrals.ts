import { Service } from 'egg';
import { Code } from '../middleware/code';
/**
 * Integrals 个人积分
 */
export default class IntegralsService extends Service {

  /**
   * 修改个人积分
   * @param name 
   * @param openid 
   * @param integrals 
   */
  public async update(name: string, openid: string, integrals: number) {
    const { ctx } = this;
    const data: any = await ctx.model.Integrals.findOne({
      where: {
        name: name
      }
    });
    const query: any = {};
    if (openid) {
      query.openid = openid;
    }
    if (integrals) {
      query.integrals = integrals;
    }
    if (!data) {
      return Object.assign({}, Code.Find.ERROE);
    } else {
      const res: any = await ctx.model.Integrals.update(query, {
        where: {
          name: name
        }
      });
      if (!res) {
        return Object.assign({}, Code.Update.ERROE)
      } else {
        return Object.assign({}, Code.Update.SUCCESS, {
          data: res
        })
      }
    }
  }


  /**
   * 查询个人积分
   * @param name 
   */
  public async queryIntegral(name: string) {
    const { ctx } = this;
    const res: any = await ctx.model.Integrals.findOne({
      attributes: ['integrals'],
      where: {
        name: name
      }
    });
    if (!res) {
      return Object.assign({}, Code.Find.ERROE);
    } else {
      return Object.assign({}, Code.Find.SUCCESS, {
        data: res
      })
    }
  }
}
