/**
 * @file config.js
 * @desc 开发环境配置
 * @author xiaoguang01
 * @date 2015/9/25
 */
"use strict";
var path = require('path');
module.exports = {
  // 当前运行模式
  runEnv: 'dev',

  developMode: true,

  // 应用全局配置
  app: {
    port: 8000,
    httpAgentMaxSocks: 30000
  },

  statics: {
    basePath: 'http://127.0.0.1/client/',
    staticRoute: 'client/src'
  },

  // 文本宏
  consts: {
    siteName: '甜菜金融'
  },

  // 模板引擎相关配置
  view: {
    root: path.join(__dirname, '../app/template'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: true,
    useLess: true
  },

  // 日志相关配置
  log: {
    path: './log/tiancai.log',
    maxLength: 3000,
    level: 1, // [ 1-debug, 2-trace, 3-notice, 4-warn, 5-fatal ]
    printTty: true,
    printFile: false,
    redictConsole: true
  },

  // 后端连接相关配置
  thirft: {
    passport: {
      url: '127.0.0.1:9999',
      options: {
        max_connections:100, 
        min_connections: 10
      }
    },
    notifaction: {
      url: '192.168.0.244:9951',
      options: {
        max_connections:100,
        min_connections: 10
      }
    },
    user: {
      url: '127.0.0.1:9970',
      options: {
        max_connections:100,
        min_connections: 10
      }
    },
    interact: {
      url: '127.0.0.1:9971',
      options: {
        max_connections:100,
        min_connections: 10
      }
    },
    coupon: {
      url: '127.0.0.1:9974',
      options: {
        max_connections:100,
        min_connections: 10
      }
    }
  },

  // redis连接相关配置

  /**
   *  哨兵相关配置
   * sentinels: [{ host: 'localhost', port: 26379 }, { host: 'localhost', port: 26380 }],
   name: 'mymaster'
   */
  redis: {
    port: 6379,
    host: '127.0.0.1',
    enableOfflineQueue: false,
    retryStrategy: function (times) {
      var delay = Math.min(times * 2, 2000);
      return delay;
    }
    //sentinels: [{ host: '192.168.0.227', port: 26379 }, { host: '192.168.0.228', port: 26379 }, { host: '192.168.0.229', port: 26379 }],
    //name: 'resque',
    //sentinelRetryStrategy: function (times) {
    //  var delay = Math.min(times * 10, 1000);
    //  return delay;
    //}
  },

  "portal":{
    server:'https://apitest.fraudmetrix.cn',
    path:'/riskService',
    secret_key:'8e1da24851a04d99be5bd553280ec047',
    partner_code:'itiancai',
    resp_detail_type:'device,geoip',
    events:{
      register:'register_web',
      authRealName:'verify_web',
      register_activity:'activity_reg',
      authRealName_activity:'activity_verfiy',
      phoneCheck:'sms_web'
    }
  },


  //sms: {
  //  redis: {
  //    host:'192.168.0.244',
  //    port: 6379,
  //    options: {
  //      connectTimeout: 1000,
  //      //重试策略为每次递增200ms，最多3次
  //      retryStrategy: function (times) {
  //        if (times > 3) {
  //          return false;
  //        }
  //        return times * 200;
  //      }
  //    }
  //  },
  //  server: 'http://192.168.0.244:8888',
  //  path4Register : "/api/v2/users/smsCaptcha",
  //  path4ResetPassword : "/api/v2/auth/resetpwd/smscaptcha/send",
  //  path4Sound : "/api/v2/auth/soundcaptcha/send",
  //  path4ValidateRegister: "/api/v2/users/register/check/smscaptcha",
  //  path4ValidateResetPassword : "/api/v2/auth/resetpwd/smscaptcha/check"
  //},

  captcha: {
    img: {
      server: "http://192.168.0.243:8083",
      path : "/captcha"
    },
    captcha_template : { //短信模板
      REGISTER : "欢迎注册甜菜金融，手机验证码：{SMS_CAPTCHA}，验证码在10分钟内有效",
      RESETPWD : "甜菜金融通知您本次修改登录密码的手机验证码为:{SMS_CAPTCHA},验证码在10分钟内有效",
      LOGIN : "登录验证码:{SMS_CAPTCHA},验证码在10分钟内有效"
    },
    TTL: 10*60, //验证码有效时间[10分钟(单位:秒)]
    MIN_INTERVAL: 50*1000, //最小发送间隔[50秒(单位:毫秒)]
    MAX_SEND_COUNT: 20, //每日最多发送条数(注册+找回密码)
    MAX_VALID_COUNT: 20 //单个验证码最多可验证次数
  },

  token:{
    DEFAULT_EXPIRE : 30*24*60*60, //token有效时间
    KEY_PRE: "passport:access_token:" //redis-key
  },

  session: {
    key: 'itiancai.sid',
    prefix: 'passport:sess:'
  }
}
