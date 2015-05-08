(function () {
  "use strict"

  var Page = instagram.Page,
      get = instagram.get;

  instagram.forPagesAt = function (url) {

    var PagedResource = function (url) {
      this.each = function (callback) {
        var load = function (url, callback) {
          instagram.get(url, function (response) {
            var page = new Page(response);
            if (page.hasError()) {
              console.error(page.getError() + " at -url: " + url);
            } else {
              callback(page);
              if (page.hasNext()) {
                load(page.nextUrl(), callback)
              }
            }
          })
        };
        load(url, callback);
      };
    };

    return new PagedResource(url);
  }

}).call(this);
