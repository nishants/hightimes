$.mockjax = function (expected) {
  $.ajax = function (params) {
    var matchesMockedParams =
        expected.url == params.url &&
        expected.type.toUpperCase() == params.type.toUpperCase() &&
        expected.dataType.toUpperCase() == params.dataType.toUpperCase() &&
        expected.data.client_id.toUpperCase() == params.data.client_id.toUpperCase();

    matchesMockedParams ? params.success(expected.response) : params.error();
  };
}

