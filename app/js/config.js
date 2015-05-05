(function () {
  "user strict"

  var config = {
    "clientID": "eafbdb4095514998ad2d06fe47f8db03",
    "clientSecret": "",
    "homeUrl" : "http://localhost:8000/dashboard.html",
    "authUrl" : "https://instagram.com/oauth/authorize/",
    "authType" : "token"
  };

  hightimes.clientConfig = config;
}).call(this);



//get user by user id: (no auth)
// https://api.instagram.com/v1/users/1924007889?client_id=eafbdb4095514998ad2d06fe47f8db03

