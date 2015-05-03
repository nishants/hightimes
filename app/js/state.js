(function () {
  "user strict"

  var ClientState = function(){};

  ClientState.prototype.encodeUserName = function (userName) {
    return "username_" + userName;
  };

  ClientState.prototype.encodeUserId = function (userId) {
    return "userid_" + userId;
  };

  window.hightimes.ClientState = ClientState;
}).call(this);