// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIntegrals from '../../../app/controller/Integrals';
import ExportQuestionBank from '../../../app/controller/QuestionBank';
import ExportScore from '../../../app/controller/Score';

declare module 'egg' {
  interface IController {
    integrals: ExportIntegrals;
    questionBank: ExportQuestionBank;
    score: ExportScore;
  }
}
