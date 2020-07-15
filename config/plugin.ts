import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  cluster: {
    enable: true,
    package: 'egg-cluster',
  },
};

export default plugin;
