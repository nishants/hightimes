(function () {
  'user strict'


  var LoginUrl = function (config) {
    this.authUrl = config.authUrl;
    this.clientId = config.clientID;
    this.redirectUrl = config.homeUrl;
    this.responseType = config.authType;
  };

  LoginUrl.prototype.forId = function (userId) {
    //TODO correct, state is not a part of the redirect url, but request itself.
    var redirectTo = this.redirectUrl +
        "?state=user-id_" + userId;

    var requestUrl = this.authUrl +
        "?client_id=" + this.clientId +
        "&response_type=" + this.responseType +
        "&redirect_uri=" + encodeURI(redirectTo);

    return requestUrl;
  };

  window.hightimes.loginUrlWith = function (config) {
    return new LoginUrl(config);
  };
}).call(this);