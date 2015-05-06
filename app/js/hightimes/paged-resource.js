(function(){
  "use strict"

  var PagedResource = function(url){
    this.url = url;
  };

  PagedResource.prototype.fetchPage = function(url, onFetch){
    $.ajax({
      url: url,
      dataType: 'jsonp',
      type: 'GET',
      data: {client_id: "eafbdb4095514998ad2d06fe47f8db03"},
      success: onFetch,
      error: function (data) {
        console.log(data);
      }
    })
  };

  PagedResource.prototype.forEach = function(callback){
    var fetchPage = this.fetchPage;

    var load = function(url, fetchNextPage, callback){
      fetchNextPage(url, function (response) {
        var page = new Page(response);
        if(page.hasError()){
          console.error(page.getError()+" -url: " +url);
        } else{
          callback(page);
          if(page.hasNext()){
            load(page.nextUrl(),fetchNextPage, callback)
          }
        }
      })
    };

    load(this.url, fetchPage, callback);
  };

  hightimes.PagedResource = PagedResource;
}).call(this);
