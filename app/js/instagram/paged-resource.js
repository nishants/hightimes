(function () {
  "use strict"

  var Page = instagram.Page

  var PagedResource = function (url) {
    this.url = url;
  };

  var fetchPage = function (url, onFetch) {
    var clientId = "eafbdb4095514998ad2d06fe47f8db03";
    $.ajax({
      url: url,
      dataType: 'jsonp',
      type: 'GET',
      data: {client_id: clientId},
      success: onFetch,
      error: function (data) {
        console.log(data);
      }
    })
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

    load(this.url, fetchPage, callback);
  };

  instagram.PagedResource = PagedResource;
}).call(this);
