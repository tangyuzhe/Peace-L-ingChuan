import { Service } from 'egg';
import { Code } from '../middleware/code';
/**
 * Score成绩
 */
export default class ScoreService extends Service {

  /**
   * 创建成绩单
   * @param score 
   */
  public async create(score: any) {
    const { ctx } = this;
    try {
      const res: any = await ctx.model.Score.create(score);
      return Object.assign({}, Code.Add.SUCCESS, {
        data: res
      });
    } catch (error) {
      ctx.status = 500;
      throw (error)
    }
  }

  /**
 * 查询分数
 * @param name 
 */
  public async queryScore(name: string) {
    const { ctx } = this;
    const res: any = await ctx.model.Score.findOne({
      attributes: ['score'],
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
