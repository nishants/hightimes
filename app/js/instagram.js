(function () {
  "use strict"

  var Instagram = function (clientId) {
    this.clientId = clientId;
  };

  var searchURlFor = function(query){
    return "https://api.instagram.com/v1/users/search?q=" + query;
  }

  Instagram.prototype.searchUsers = function(query){
    var promise = new hightimes.Promise();
    $.ajax({
      url: searchURlFor(query),
      dataType: 'jsonp',
      type: 'GET',
      data: {client_id: this.clientId},
      success: function (data) {
        promise.fulfill(data);
      },
      error: function (data) {
        promise.sorry(data);
      }
    });
    return promise;
  };

  window.hightimes.Instagram = Instagram;
}).call(this);
