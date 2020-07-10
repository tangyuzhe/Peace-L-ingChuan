// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCode from '../../../app/middleware/code';

declare module 'egg' {
  interface IMiddleware {
    code: typeof ExportCode;
  }
}
