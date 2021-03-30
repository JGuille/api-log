import pino from 'pino';

const l = pino(
  // {
  //   // prettyPrint: {
  //   //   // colorize: false,
  //   //   // levelFirst: true,
  //   //   ignore: 'hostname,pid,time',
  //   // },
  //   // prettifier: require('pino-pretty'),
  //   name: process.env.APP_ID,
  //   // level: process.env.LOG_LEVEL,
  // },
  // pino.destination("./api-log.log")
);

export default l;
