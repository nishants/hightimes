(function () {
  "use strict"

  var Modal = function ($window, data) {
    this.window = $window;
    this.render(data);
  };

  Modal.prototype.render = function (data) {
    var sampleOption = this.window.find(".username-option").first();
    for (var i = 0; i < data.length ; i++) {
      var optionNode = sampleOption.clone();
      optionNode.html(data[i]);
      optionNode.attr("option", i);
      sampleOption.parent().append(optionNode);
    }
    sampleOption.hide();
  };

  Modal.prototype.show = function (onSelection) {
    this.window.show("slow", "swing");
    var onOptionClick = function(e){
      var selectedIndex = $(e.target).attr("option");
      onSelection(selectedIndex);
    };
    this.window.find(".username-option:visible").on("mousedown", onOptionClick)
  };

  window.hightimes.Modal = {};

  window.hightimes.Modal.create = function ($window, data) {
    return new Modal($window, data);
  };

}).call(this);
