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

  var urlForPostsOf = function (user) {
    return urls.recentMedia.replace("<user-id>", user.id)
  };
  var followersURlOf = function (user) {
    return urls.followers.replace("<user-id>", user.id)
  };

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


    instagram.forPagesAt(followersURlOf(user)).each(function (followersPage) {
      followersPage.dataList().forEach(function (follower) {
        forEachFollowersDo(follower);

        instagram.forPagesAt(urlForPostsOf(follower)).each(function (page) {
          if (page.dataList()) {
            page.dataList().forEach(function (post) {
              forEachFollowerPostDo(post, follower);
            });
          } else {
            console.error("no posts found for " + follower.id)
          }
        });
      });

    });
  };

  window.instagram = {};
  instagram.get = get;
  instagram.clientWith = function (clientId) {
    return new Instagram(clientId);
  };

}).call(this);
