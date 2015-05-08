(function () {
  "use strict"

  var Page = instagram.Page,
      get = instagram.get;

  instagram.pages = function (url, fetchNextPage) {

    var PagedResource = function (url) {
      this.url = url;
    };

    PagedResource.prototype.forEach = function (callback) {
      var load = function (url, callback) {
        get(url, function (response) {
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
      load(this.url, callback);
    };

    return new PagedResource(url, fetchNextPage);
  }

}).call(this);
