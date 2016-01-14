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
    printFile: true,
    redictConsole: true
  },

  // 后端连接相关配置
  thirft: {
    passport: {
      host: '192.168.0.245',
      port: 9981
    },
    notifaction: {
      host: '192.168.0.244',
      port: 9951
    }
  },

  // redis连接相关配置
  redis: {
    port: 6379,
    host: '127.0.0.1',
    options: {
      connectTimeout: 1000,
      //重试策略为每次递增200ms，最多3次
      retryStrategy: function (times) {
        if (times > 3) {
          return false;
        }
        return times * 200;
      }
    }
  },

  captcha: {
    sms: {
      redis: {
        host:'192.168.0.244',
        port: 6379,
        options: {
          connectTimeout: 1000,
          //重试策略为每次递增200ms，最多3次
          retryStrategy: function (times) {
            if (times > 3) {
              return false;
            }
            return times * 200;
          }
        }
      },
      server: 'http://192.168.0.244:8888',
      path4Register : "/api/v2/users/smsCaptcha",
      path4ResetPassword : "/api/v2/auth/resetpwd/smscaptcha/send",
      path4Sound : "/api/v2/auth/soundcaptcha/send",
      path4ValidateRegister: "/api/v2/users/register/check/smscaptcha",
      path4ValidateResetPassword : "/api/v2/auth/resetpwd/smscaptcha/check"
    },
    img: {
      server: "http://192.168.0.243:8083",
      path : "/captcha"
    },
    captcha_template : { //短信模板
      REGISTER : "欢迎注册甜菜金融，手机验证码：{SMS_CAPTCHA}，验证码在10分钟内有效 www.itiancai.com",
      RESETPWD : "甜菜金融通知您本次修改登录密码的手机验证码为:{SMS_CAPTCHA},验证码在10分钟内有效"
    }
  },

  session: {
    key: 'itiancai.sid',
    prefix: 'passport:sess:'
  }
}
