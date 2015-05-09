(function () {
  "use strict"

  window.hightimes = {};

  var instagram,
      periodLengthInHours = 3;    // Divide a day into hours of 3
  ;

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

  hightimes.newActivityMatrix = function(){
    return new hightimes.UserActivityMatrix(periodLengthInHours);
  };

  hightimes.forEachFollowersRecentMediaDo = function (userID, forEachFollowerPostDo) {
    return instagram.forAllPostsOfFollowersDo(userID, function(){}, forEachFollowerPostDo);
  };

}).call(this);