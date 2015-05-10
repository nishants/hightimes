(function () {
  "use strict"

  var
      searchFor = function (username) {
        return "https://api.instagram.com/v1/users/search?q=" + username;
      },

      postsOf = function (user) {
        return "https://api.instagram.com/v1/users/<user-id>/media/recent".replace("<user-id>", user.id)
      },

      followersOf = function (user) {
        return "https://api.instagram.com/v1/users/<user-id>/followed-by".replace("<user-id>", user.id)
      },

      userFor = function (userID) {
        return "https://api.instagram.com/v1/users/<user-id>".replace("<user-id>", userID);
      };

  var Instagram = function () {
    this.searchUsers = function (username, success, failed) {
      instagram.get(searchFor(username),
          function (response) {
            success(response.data)
          },
          failed
      );
    };

    this.findUserById = function (userID, success, failed) {
      instagram.get(
          userFor(userID),
          function (response) {
            success(response.data);
          },
          failed
      );
    };

    this.forAllPostsOfFollowersDo = function (user, forEachFollowersDo, forEachFollowerPostDo) {
      instagram.forPagesAt(followersOf(user)).each(function (followersPage) {
        followersPage.dataList().forEach(function (follower) {
          forEachFollowersDo(follower);
            instagram.forPagesAt(postsOf(follower)).each(function (page) {
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
      try{
        $.ajax({
          url: url,
          dataType: 'json',
          type: 'get',
          data: {client_id: clientId},
          success: success,
          error: failed
        })
      }catch(clientError){
        console.error(clientError);
        failed(clientError);
      }
;
    };

    return new Instagram(clientId);
  };

}).call(this);
