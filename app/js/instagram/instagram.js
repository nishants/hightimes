(function () {
  "use strict"

  var
      searchURlFor = function (query) {
        return "https://api.instagram.com/v1/users/search?q=" + query;
      },

      urlForPostsOf = function (user) {
        return "https://api.instagram.com/v1/users/<user-id>/media/recent".replace("<user-id>", user.id)
      },

      followersURlOf = function (user) {
        return "https://api.instagram.com/v1/users/<user-id>/followed-by".replace("<user-id>", user.id)
      },

      urlFor = function (userID) {
        return "https://api.instagram.com/v1/users/<user-id>".replace("<user-id>", userID);
      };

  var Instagram = function () {
    this.searchUsers = function (query, success, failed) {
      instagram.get(searchURlFor(query),
          function (response) {
            success(response.data)
          },
          failed
      );
    };

    this.findUserById = function (userID, success, failed) {
      instagram.get(
          urlFor(userID),
          function (response) {
            success(response.data);
          },
          failed
      );
    };

    this.forAllPostsOfFollowersDo = function (user, forEachFollowersDo, forEachFollowerPostDo) {
      instagram.forPagesAt(followersURlOf(user)).each(function (followersPage) {
        followersPage.dataList().forEach(function (follower) {
          forEachFollowersDo(follower);
          instagram.forPagesAt(urlForPostsOf(follower)).each(function (page) {
            if (page.dataList()) {
              page.dataList().forEach(function (post) {
                forEachFollowerPostDo(post, follower);
              });
            }
          });
        });
      });
    };
  };

  window.instagram = {};
  instagram.clientWith = function (clientId) {
    instagram.get = function (url, success, failed) {
      $.ajax({
        url: url,
        dataType: 'json',
        type: 'get',
        data: {client_id: clientId},
        success: success,
        error: failed
      });
    };

    return new Instagram(clientId);
  };

}).call(this);
