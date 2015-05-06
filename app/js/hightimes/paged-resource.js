(function(){
  "use strict"

  var Page = hightimes.Page;

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

  var forAllPostsOfFollowersDo = function (userID, forEachFollowersDo, forEachFollowerPostDo) {
    var url = "https://api.instagram.com/v1/users/<user-id>/followed-by".replace("<user-id>", userID);
    var pageCount = 1;

    new PagedResource(url).forEach(function (page) {
      console.log("Followers on page-" + (pageCount++) + " : ")
      var followers = page.dataList();
      for (var i = 0; i < followers.length; i++) {
        var follower = followers[i];
        forEachFollowersDo(follower);

        var userPostsUrl = "https://api.instagram.com/v1/users/<user-id>/media/recent".replace("<user-id>", follower.id);
        new PagedResource(userPostsUrl).forEach(function (page) {
          if (page.dataList()) {
            var posts = page.dataList();
            for (var i = 0; i < posts.length; i++) {
              forEachFollowerPostDo(follower, posts[i]);
            }
          } else {
            console.error("no posts found for " + follower.id)
          }
        });
      }
    });

  }

  hightimes.forAllPostsOfFollowersDo = forAllPostsOfFollowersDo;
}).call(this);
