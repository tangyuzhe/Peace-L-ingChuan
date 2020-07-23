import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
const Op = require('sequelize').Op;
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
    host: '124.70.188.227',
    port: 3306,
    database: 'peacelc',
    username: 'root',
    password: 'Fznfzn509.',
    timezone: '+08:00',
    define: {
      timestamps: false,
    },
    operatorsAliases: {
      $between: Op.between,
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
    enableSecurity: false,
    routerMap: true,
    enable: true,
  };

  // 添加白名单访问列表
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    origin: '*',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.cluster = {
    listen: {
      path: '',
      port: 4000,
      hostname: '127.0.0.1',
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
