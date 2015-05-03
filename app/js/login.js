(function () {
  'user strict'


  var LoginService = function (config) {
    this.authUrl = config.authUrl;
    this.clientId = config.clientID;
    this.redirectUrl = config.homeUrl;
    this.responseType = config.authType;
  };

  LoginService.prototype.withUserId = function (userId) {
    var redirectTo = this.redirectUrl +
        "?state=user-id_" + userId;

    var requestUrl = this.authUrl +
        "?client_id=" + this.clientId +
        "&response_type=" + this.responseType +
        "&redirect_uri=" + encodeURI(redirectTo);

    return requestUrl;
  };

  window.hightimes.loginUrlFor = function (config) {
    return new LoginService(config);
  };
}).call(this);