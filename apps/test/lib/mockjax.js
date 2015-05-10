var expectedParams = {};

window.mockjax = function (param) {
  expectedParams[new String(param.url)] = param;
}

$.ajax = function (param) {
  var expectedParam = expectedParams[param.url];
  if (!expectedParam) {
    throw new Error("Unexpected url called : " + param.url);
  }

  if (expectedParam.type != param.type) {
    var msg = "Wrong type for url " + param.url;
    msg += "\nExpected : " + expectedParam.type;
    msg += "\nFound    : " + param.type;

    throw new Error(msg);
  }

  if (expectedParam.dataType != param.dataType) {
    var msg = "Wrong dataType for url " + param.url;
    msg += "\nExpected : " + expectedParam.dataType;
    msg += "\nFound    : " + param.dataType;

    throw new Error(msg);
  }

  if (expectedParam.data.client_id != param.data.client_id) {
    var msg = "Wrong data.client_id for url " + param.url;
    msg += "\nExpected : " + expectedParam.data.client_id;
    msg += "\nFound    : " + param.data.client_id;

    throw new Error(msg);
  }

  param.success(expectedParam.response);
}
