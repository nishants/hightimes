(function () {
  "use strict"

  var Modal = function ($window, data) {
    this.window = $window;
    this.data = data;
    this.render();
  };

  Modal.prototype.render = function () {
    var sampleOption = this.window.find(".username-option").first();
    for (var i = 0; i < this.data.length ; i++) {
      var optionNode = sampleOption.clone();
      optionNode.html(this.data[i]);
      sampleOption.parent().append(optionNode);
    }
    sampleOption.hide();
  };

  Modal.prototype.show = function () {
    this.window.show("slow", "swing");
  };

  window.hightimes.Modal = {};

  window.hightimes.Modal.create = function ($window, data) {
    return new Modal($window, data);
  };

}).call(this);
