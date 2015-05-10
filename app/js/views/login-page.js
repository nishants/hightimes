(function () {
  "use strict"
  var LoginPage = function($page, onLogin){

    var toUserNames = function(users){
      var usernames = [];
      for(var i =0 ; i< users.length; i++){
        usernames.push(users[i].username)
      }
      return usernames;
    };

    var invalidUserId = function () {
      alert("Please enter a valid user id.");
    };

    var onLoginSucces = function (user) {
      onLogin(user);
      destroy();
    };


    var showModal = function (data) {
      var onSelect = function (index) {alert("selected : "+ data[index]);}
      hightimes.Modal.create($("#select-user-dialog"), data).show(onSelect);
    };

    var userID = function () {
      return $("#user-id").val();
    };
    var username = function () {
      return $("#username").val();
    };

    var destroy = function(){
      $page.hide();
    };

    $("#login-by-id").mousedown(function(e){
      hightimes.findUserById(userID(), onLoginSucces, invalidUserId);
    });

    $("#login-by-name").mousedown(function(e){
      hightimes.searchUsername(username()).ok(function (user) {
        onLogin(user);
        destroy();
      }).error(function(users){
        showModal(toUserNames(users));
      });
    });

    this.show = function(){
      $page.show();
      return this;
    };

  };

  hightimes.showLoginPage = function($page, onLogin){
    new LoginPage($page, onLogin).show();
  };

}).call(this);