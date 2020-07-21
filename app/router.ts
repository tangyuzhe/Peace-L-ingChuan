import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // const { router } = app;
  // router.get('/',app.controller.index);
  router.redirect('/', '/swagger-ui.html', 302);
  router.put('/api/integrals', controller.integrals.create);
  router.get('/api/integrals/:name', controller.integrals.queryIntegral);

  router.post('/api​/question', controller.questionBank.create);
  router.get('/api​/question', controller.questionBank.show);
  router.get('/api/question/:id', controller.questionBank.findAnswer);

  router.post('/api/score', controller.score.create);
  router.get('/api/score/:name', controller.score.QueryScore);
};
