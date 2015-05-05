(function () {
  "use strict"

  window.hightimes = {};

  var clientId = "eafbdb4095514998ad2d06fe47f8db03",
      instagram;

  window.hightimes.init = function () {
    instagram = new hightimes.Instagram(clientId)
  };

  var indexOf = function(users, username){
    for(var i = 0; i< users.length; i++){
      if(users[i].username == username) return i;
    }
    return -1;
  };

  hightimes.findUserById = function (id) {
    return instagram.findUserById(id);
  };

  window.hightimes.searchUsername = function (query) {
    var promise = new hightimes.Promise();
    instagram.searchUsers(query).ok(function(response){
      var users = response.data;
      var index = indexOf(users, query);
      console.log("index: " + index);
      if(index != -1){
        promise.fulfill(users[index]);
      } else{
        promise.sorry(users);
      }
    }).error(function(data){
      promise.sorry(data);
    });
    return promise;
  };

}).call(this);