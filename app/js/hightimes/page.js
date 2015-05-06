(function(){
  "use strict"

  // Represents response of a request to instagram api
  var Page = function(httpResponse){
    this.respone = httpResponse;
  };

  Page.prototype.hasNext = function(){
    return !this.hasError() && !this.isEndPage();
  };

  Page.prototype.hasError = function(){
    return this.respone.meta.code != 200;
  };

  Page.prototype.getError = function(){
    return this.respone.meta;
  };

  Page.prototype.isEndPage = function(){
    return !this.respone.pagination.next_url;
  };

  Page.prototype.dataList = function(){
    return this.respone.data;
  };

  window.hightimes.Page = Page;
}).call(this);
