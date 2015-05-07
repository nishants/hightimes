var clientId = "client-id",
    userID = "user-id",
    expectedURLs = {
      userById: "https://api.instagram.com/v1/users/user-id"
    },
    userByIdResponse = {
      meta: {
        "code": 200
      },
      data: {
        username: "nishant.singh87",
        profile_picture: "https://instagramimages-a.akamaihd.net/profiles/anonymousUser.jpg",
        full_name: "Nishant",
        id: "1924007889"
      }
    },
    mockjax = function (expected) {
      $.ajax = function (params) {
        var matchesMockedParams =
            expected.url == params.url &&
            expected.type.toUpperCase() == params.type.toUpperCase() &&
            expected.dataType.toUpperCase() == params.dataType.toUpperCase() &&
            expected.data.client_id.toUpperCase() == params.data.client_id.toUpperCase();

        matchesMockedParams ? params.success(expected.response) : params.error();
      };
    },
    client;


QUnit.module('instagram.js', {
  setup: function () {
    client = instagram.clientWith(clientId);
  }
});

QUnit.test("clientWith", function (assert) {
  assert.ok(client, "instagram.clientWith(clientId) should return new client for the client id");
});

QUnit.test("findUserById", function (assert) {
  var expectedUser = userByIdResponse.data,
      assertNotCalled = function () {
        assert.ok(false, "should not invoke failed");
      },
      assertUser = function (user) {
        assert.deepEqual(user, expectedUser, "should call success with user")
      };

  mockjax({
    url: expectedURLs.userById,
    type: 'GET',
    dataType: "JSON",
    data: {client_id: clientId},
    response: userByIdResponse,
    success: assertUser,
    error: assertNotCalled
  });

  client.findUserById(userID, assertUser, assertNotCalled)

  assert.expect(1, "Should invoke onSuccess callback.");
});