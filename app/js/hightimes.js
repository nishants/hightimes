(function () {
  "use strict"

  var currentUrl = function(){
    return window.location.href;
  };

  var parse = function(url) {
    var accessToken =  url.split("access_token=")[1].split("&")[0];
    var userID = url.split("user-id_")[1].split("#")[0];
    return {
      "accessToken" : accessToken,
      "userId" : userID
    };
  };

  var login = function() {
    var urlParams = parse(currentUrl());
    new hightimes.Instagram(hightimes.clientConfig).getFollowers(urlParams.userId, urlParams.accessToken);
  };

  window.hightimes = {};
  window.hightimes.login = function () {
    login();
  };


}).call(this);