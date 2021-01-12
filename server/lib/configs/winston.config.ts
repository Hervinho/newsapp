/*
Winston logging levels (highest to lowest)
----------------------
0: error
1: warn
2: info
3: verbose
4: debug
5: silly
 */
const appRoot = require('app-root-path');//used for paths
const winston = require('winston');
//const moment = require('moment');
require('winston-daily-rotate-file');//file rotation

let timestampFomat = function () {
  return new Date().toLocaleString()
};

//log any info issues in a file, and any debug issue in the console.
let options = {
    file: {
      level: 'info',
      filename: appRoot + '/logs/server.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: true,
      timestamp: timestampFomat
    },
    console: {
      level: 'debug',
      handleExceptions: false,
      json: false,
      colorize: true,
      timestamp: timestampFomat
    },
    errorRotate: {
        level: 'error',
        filename: appRoot + '/logs/errors_%DATE%.log',
        datePattern: 'DD-MM-YYYY',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        json: true,
        handleExceptions: true,
        colorize: false,
        timestamp: timestampFomat
    }
};

//instantiate winston logger with file and console transports.
let logger = winston.createLogger({
    transports: [
      new winston.transports.File(options.file),
      // new winston.transports.Console(options.console),
      new winston.transports.DailyRotateFile(options.errorRotate)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

//By default, morgan outputs to the console only. 
//Define a stream function that will be get morgan outputs into the winston log files.
logger.stream = {
    write: function(message:any, encoding:any) {
      // use the 'info' log level so the output will be picked up by both file and console transports.
        logger.info(message);
    }
};

//module.exports = logger;
export const winstonLogger = logger;