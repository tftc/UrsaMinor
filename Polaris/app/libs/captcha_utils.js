//随机数
var randomNumber = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

module.exports = {
  /**
   * 生成短信内容
   * @param captcha_obj {SMS_CAPTCHA:'11111' ...}
   * @param template 短信模板
   */
  genSmsContent: function (captcha_obj, template) {
    var result = template;
    for (var key in captcha_obj) {
      if (captcha_obj[key] != undefined) {
        var reg = new RegExp("({" + key + "})", "g");
        result = result.replace(reg, captcha_obj[key]);
      }
    }
    return result;
  },


  /**
   * 生产验证码
   * @returns {string}
   */
  genCaptcha: function () {
    var code = "";
    var codeLength = 6;//验证码的长度
    for (var i = 0; i < codeLength; i++) {//循环操作
      var index = Math.floor(Math.random() * 10);//取得随机数的索引（0~35）
      code += randomNumber[index];//根据索引取得随机数加到code上
    }
    return code;//把code值赋给验证码
  },

  /**
   *
   * @param tokenNo
   * @returns {string}
   */
  img_captcha_key: function(tokenNo) {
    return "passport:captcha:img:" + tokenNo;
  },

  /**
   * 验证码安全redis_key
   * @param mobile
   * @returns {string}
   */
  sms_captcha_check_key: function(mobile) {
    var today = moment(Date.now()).format('YYYY-MM-DD');
    return "passport:captcha:mobile:check:"+today+":"+mobile;
  },

  /**
   * 注册redis_key
   * @param mobile
   * @returns {string}
   */
  sms_captcha_register_key: function(mobile) {
    return "passport:captcha:sms:register:"+mobile;
  },
  /**
   * 找回密码redis_key
   * @param mobile
   * @returns {string}
   */
  sms_captcha_resetpwd_key: function(mobile) {
    return "passport:captcha:sms:resetpwd:"+mobile;
  }
}