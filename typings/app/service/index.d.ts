// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportIntegrals from '../../../app/service/integrals';
import ExportQuestionBank from '../../../app/service/questionBank';
import ExportScore from '../../../app/service/score';

declare module 'egg' {
  interface IService {
    integrals: AutoInstanceType<typeof ExportIntegrals>;
    questionBank: AutoInstanceType<typeof ExportQuestionBank>;
    score: AutoInstanceType<typeof ExportScore>;
  }
}
