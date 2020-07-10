import { Application } from 'egg';

export default (app: Application) => {
  // const { controller, router } = app;
  const { router } = app;
  // router.get('/',app.controller.index);
  router.redirect('/', '/swagger-ui.html', 302)
  router.post('/api/question', app.controller.questionBank.create)
};
