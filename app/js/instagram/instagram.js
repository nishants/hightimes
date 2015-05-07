(function () {
  "use strict"

  var urls = {
    followers: "https://api.instagram.com/v1/users/<user-id>/followed-by",
    recentMedia: "https://api.instagram.com/v1/users/<user-id>/media/recent"
  };

  var Instagram = function (clientId) {
    this.clientId = clientId;
  };

  var user = function (id) {
    return "https://api.instagram.com/v1/users/" + id;
  }

  var searchURlFor = function (query) {
    return "https://api.instagram.com/v1/users/search?q=" + query;
  }

  Instagram.prototype.searchUsers = function (query) {
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

  Instagram.prototype.findUserById = function (id) {
    var promise = new hightimes.Promise();
    $.ajax({
      url: user(id),
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

  Instagram.prototype.forAllPostsOfFollowersDo = function (userID, forEachFollowersDo, forEachFollowerPostDo) {
    var url = urls.followers.replace("<user-id>", userID);

    new instagram.PagedResource(url).forEach(function (page) {
      var followers = page.dataList();
      for (var i = 0; i < followers.length; i++) {
        var follower = followers[i];
        forEachFollowersDo(follower);

        var userPostsUrl = urls.recentMedia.replace("<user-id>", follower.id);
        new instagram.PagedResource(userPostsUrl).forEach(function (page) {
          if (page.dataList()) {
            var posts = page.dataList();
            for (var i = 0; i < posts.length; i++) {
              forEachFollowerPostDo(follower, posts[i]);
            }
          } else {
            console.error("no posts found for " + follower.id)
          }
        });
      }
    });
  };
  hightimes.Instagram = Instagram;

  window.instagram = {}
  window.instagram.clientWith = function (clientId) {
    return new Instagram(clientId);
  };

}).call(this);
