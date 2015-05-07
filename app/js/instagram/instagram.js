(function () {
  "use strict"

  var urls = {
        userId: "https://api.instagram.com/v1/users/<user-id>",
        followers: "https://api.instagram.com/v1/users/<user-id>/followed-by",
        recentMedia: "https://api.instagram.com/v1/users/<user-id>/media/recent"
      },
      clientId;

  var Instagram = function (client) {
    clientId = client;
  };

  var user = function (id) {
    return "https://api.instagram.com/v1/users/" + id;
  }

  var searchURlFor = function (query) {
    return "https://api.instagram.com/v1/users/search?q=" + query;
  }

  Instagram.prototype.searchUsers = function (query, success, failed) {
    $.ajax({
      url: searchURlFor(query),
      dataType: 'json',
      type: 'get',
      data: {client_id: clientId},
      success: function (response) {
        success(response.data)
      },
      error: failed
    });
  };

  Instagram.prototype.findUserById = function (userID, success, failed) {
    $.ajax({
      url: urls.userId.replace("<user-id>", userID),
      dataType: 'json',
      type: 'get',
      data: {client_id: clientId},
      success: function (response) {
        success(response.data);
      },
      error: failed
    });
  };

  Instagram.prototype.forAllPostsOfFollowersDo = function (userID, forEachFollowersDo, forEachFollowerPostDo) {
    var url = urls.followers.replace("<user-id>", userID);

    new instagram.PagedResource(url, clientId).forEach(function (page) {
      var followers = page.dataList();
      for (var i = 0; i < followers.length; i++) {
        var follower = followers[i];
        forEachFollowersDo(follower);

        var userPostsUrl = urls.recentMedia.replace("<user-id>", follower.id);
        new instagram.PagedResource(userPostsUrl, clientId).forEach(function (page) {
          if (page.dataList()) {
            var posts = page.dataList();
            for (var i = 0; i < posts.length; i++) {
              forEachFollowerPostDo(posts[i], follower);
            }
          } else {
            console.error("no posts found for " + follower.id)
          }
        });
      }
    });
  };

  window.instagram = {}
  window.instagram.clientWith = function (clientId) {
    return new Instagram(clientId);
  };

}).call(this);
