// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIntegrals from '../../../app/model/integrals';
import ExportQuestionBank from '../../../app/model/questionBank';
import ExportScore from '../../../app/model/score';

declare module 'egg' {
  interface IModel {
    Integrals: ReturnType<typeof ExportIntegrals>;
    QuestionBank: ReturnType<typeof ExportQuestionBank>;
    Score: ReturnType<typeof ExportScore>;
  }
}
