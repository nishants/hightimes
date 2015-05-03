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
    alert("user-id : " + urlParams.userId +"\n token : " + urlParams.accessToken )
    getFollowers(urlParams.userId, urlParams.accessToken);
  };

  var getFollowers = function(userId, accessToken){
    var clientId = "eafbdb4095514998ad2d06fe47f8db03"
    var url = 'https://api.instagram.com/v1/users/'
              + userId
              + '/followed-by?access_token='
              + accessToken;
    $.ajax({
      url: url,
      dataType: 'jsonp',
      type: 'GET',
      data: {client_id: clientId},
      success: function(data){
        console.log(data);
      },
      error: function(data){
        console.log(data);
      }
    });
  };

  window.hightimes = {};
  window.hightimes.login = function () {
    login();
  };

}).call(this);