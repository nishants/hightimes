(function () {
  "use strict"

  var Instagram = function (config) {
    this.clientId = config.clientID;
  };

  Instagram.prototype.getFollowers = function (userId, accessToken) {
    var url = 'https://api.instagram.com/v1/users/'
        + userId
        + '/followed-by?access_token='
        + accessToken;

    $.ajax({
      url: url,
      dataType: 'jsonp',
      type: 'GET',
      data: {client_id: this.clientId},
      success: function (data) {
        console.log(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  };

  hightimes.Instagram = Instagram;
}).call(this);