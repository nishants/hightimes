(function () {
  "use strict"

  var Page = instagram.Page,
      clientId,
      PagedResource = function (url, client) {
        this.url = url;
        clientId = client;
      };

  var fetchNextPage = function (url, onFetch) {
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'get',
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

    load(this.url, fetchNextPage, callback);
  };

  instagram.PagedResource = PagedResource;
}).call(this);
