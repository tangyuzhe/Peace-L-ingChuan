import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594132888267_6924';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '121.37.180.33',
    port: 3306,
    database: 'peacelc',
    username: 'root',
    password: 'Fznfzn509',
    timezone: '+08:00',
    define: {
      timestamps: false
    },
  };

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '平安灵川',
      description: '平安灵川试题库',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {

    },
    enableSecurity: false,
    routerMap: true,
    enable: true,
  };

  // 添加白名单访问列表
  config.security = {
    csrf: {
      enable: false
    }
  };

  config.cors = {
    origin: '*',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }



  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
