var Page = instagram.Page,
    endPage,
    endPageResponse = {
      "pagination": {},
      "meta": {"code": 200},
      "data": [{"field1": "1", "field2": "2"}]
    },

    errorPage,
    httpErrorResponse =  {
      "meta": {
        "error_type": "APINotAllowedError",
        "code": 400,
        "error_message": "you cannot view this resource"
      }
    };


QUnit.module('Page', {
  setup: function() {
    errorPage = new Page(httpErrorResponse);
    endPage = new Page(endPageResponse);
  }
});

QUnit.test("any error code other than 200 is http error(only get request supported)", function (assert) {
  assert.ok(errorPage.hasError(), "response has error if meta.code is not 200");
});

QUnit.test("error page has no next", function (assert) {
  assert.ok(!errorPage.hasNext(), "hasNext is false if hasError is true")
});

QUnit.test("should return error", function (assert) {
  assert.deepEqual(errorPage.getError(), httpErrorResponse.meta, "should return response.meta on getError")
});

QUnit.test("end page has no next", function (assert) {
  assert.ok(!endPage.hasNext(), "isEndPage is true if response.pagination == {}")
  assert.ok(!endPage.hasNext(), "hasNext is false if response.pagination == {}")
});

