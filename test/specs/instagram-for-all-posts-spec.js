(function () {
  "use strict"

  var clientId = "client-id",
      userID = "user-id",
      expectedURLs = {
        followersPageOne: "https://api.instagram.com/v1/users/user-id/followed-by",
        followersPageTwo: "https://api.instagram.com/v1/users/user-id/followed-by-page-2",

        followerOneMedia: "https://api.instagram.com/v1/users/follower-1/media/recent",

        followerTwoMediaPageOne: "https://api.instagram.com/v1/users/follower-2/media/recent",
        followerTwoMediaPageTwo: "https://api.instagram.com/v1/users/follower-2/media/recent-page-2"
      },

      followersPageOne = {
        pagination: {next_url: expectedURLs.followersPageTwo},
        meta: {code: 200},
        data: [{id: "follower-1"}]
      },

      followersPageTwo = {
        pagination: {/* empty for last page */},
        meta: {code: 200},
        data: [{id: "follower-2"}]
      },

      followerOneMedia = {
        pagination: {},
        meta: {code: 200},
        data: [{created_time: "1430387553"}, {created_time: "1430387553"}]
      },

      followerTwoMediaPageOne = {
        pagination: {next_url: expectedURLs.followerTwoMediaPageTwo},
        meta: {code: 200},
        data: [{created_time: "1438767553"}, {created_time: "143099953"}]
      },

      followerTwoMediaPageTwo = {
        pagination: {/* empty for last page */},
        meta: {code: 200},
        data: [{created_time: "1438847553"}, {created_time: "143099243"}]
      },

      client;

  QUnit.module('instagram.js', {
    setup: function () {
      client = instagram.clientWith(clientId);
    }
  });

  QUnit.asyncTest("instagram.forAllPostsOfFollowersDo(userID, forEachFollowersDo, forEachFollowerPostDo)", function (assert) {
    var foundFollowers = [],
        foundPostsTimes = [],

        forEachFollowersDo = function (user) {
          foundFollowers.push(user.id);
        },

        forEachFollowerPostDo = function (post) {
          foundPostsTimes.push(post.created_time);
        };

    var params = function (urlResonse) {
      return {
        url: urlResonse.url,
        type: 'get',
        dataType: "json",
        data: {client_id: clientId},
        response: urlResonse.response,
        success: function () {
        },
        error: function () {
        }
      }
    };

    mockjax(params({"url": expectedURLs.followersPageOne, "response": followersPageOne}));
    mockjax(params({"url": expectedURLs.followersPageTwo, "response": followersPageTwo}));
    mockjax(params({"url": expectedURLs.followerOneMedia, "response": followerOneMedia}));
    mockjax(params({"url": expectedURLs.followerTwoMediaPageOne, "response": followerTwoMediaPageOne}));
    mockjax(params({"url": expectedURLs.followerTwoMediaPageTwo, "response": followerTwoMediaPageTwo}));

    client.forAllPostsOfFollowersDo(userID, forEachFollowersDo, forEachFollowerPostDo);

    setTimeout(function () {
      assert.deepEqual(foundFollowers, ["follower-1", "follower-2"], "should find followers from all pages");
      assert.deepEqual(foundPostsTimes, [
        followerOneMedia.data[0].created_time, followerOneMedia.data[1].created_time,
        followerTwoMediaPageOne.data[0].created_time, followerTwoMediaPageOne.data[1].created_time,
        followerTwoMediaPageTwo.data[0].created_time, followerTwoMediaPageTwo.data[1].created_time
      ], "should find posts from all pages");
    });

    assert.expect(2);
  });

}).call(this);

