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

  var get = function (url, success, failed) {
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'get',
      data: {client_id: clientId},
      success: success,
      error: failed
    });
  };

  var user = function (id) {
    return "https://api.instagram.com/v1/users/" + id;
  }

  var searchURlFor = function (query) {
    return "https://api.instagram.com/v1/users/search?q=" + query;
  }

  Instagram.prototype.searchUsers = function (query, success, failed) {
    get(searchURlFor(query),
        function (response) {
          success(response.data)
        },
        failed
    );
  };

  Instagram.prototype.findUserById = function (userID, success, failed) {
    get(
        urls.userId.replace("<user-id>", userID),
        function (response) {
          success(response.data);
        },
        failed
    );
  };

  Instagram.prototype.forAllPostsOfFollowersDo = function (user, forEachFollowersDo, forEachFollowerPostDo) {
    var url = urls.followers.replace("<user-id>", user.id);

    instagram.pages(url, get).forEach(function (page) {
      var followers = page.dataList();
      for (var i = 0; i < followers.length; i++) {
        var follower = followers[i];
        forEachFollowersDo(follower);

        var userPostsUrl = urls.recentMedia.replace("<user-id>", follower.id);
        instagram.pages(userPostsUrl, get).forEach(function (page) {
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
