(function () {
  "use strict"

  var Page = instagram.Page;


  instagram.pages = {};
  instagram.pages = function (url, fetchNextPage) {

    var PagedResource = function (url, get) {
      this.url = url;
      fetchNextPage = get;
    };

    PagedResource.prototype.forEach = function (callback) {
      var load = function (url, fetchNextPage, callback) {
        fetchNextPage(url, function (response) {
          var page = new Page(response);
          if (page.hasError()) {
            console.error(page.getError() + " -url: " + url);
          } else {
            callback(page);
            if (page.hasNext()) {
              load(page.nextUrl(), fetchNextPage, callback)
            }
          }
        })
      };
      load(this.url, fetchNextPage, callback);
    };

    return new PagedResource(url, fetchNextPage);
  }

}).call(this);
