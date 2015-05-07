(function () {
  "use strict"

  window.hightimes = {};

  var instagram;

  window.hightimes.init = function (instagramClient) {
    instagram = instagramClient;
  };

  var indexOf = function(users, username){
    for(var i = 0; i< users.length; i++){
      if(users[i].username == username) return i;
    }
    return -1;
  };

  hightimes.findUserById = function (instagramId) {
    var promise = new hightimes.Promise();

    instagram.findUserById(
        instagramId,
        promise.fulfill,
        promise.sorry);

    return promise;
  };

  window.hightimes.searchUsername = function (query) {
    var promise = new hightimes.Promise();

    var success = function (response) {
      var users = response.data;
      var index = indexOf(users, query);
      if (index != -1) {
        promise.fulfill(users[index]);
      } else {
        promise.sorry(users);
      }
    };

    var failed = function (data) {
      promise.sorry(data);

    };

    instagram.searchUsers(
        query,
        success,
        failed
    );
    return promise;
  };

  hightimes.forAllPostsOfFollowersDo = function (userID, forEachFollowersDo, forEachFollowerPostDo) {
    return instagram.forAllPostsOfFollowersDo(userID, forEachFollowersDo, forEachFollowerPostDo);
  };

}).call(this);