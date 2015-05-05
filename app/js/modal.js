var Modal = function($window){
  this.window = $window;
};

Modal.prototype.close = function(){};
Modal.prototype.show = function(){};

window.hightimes.Modal = {};
window.hightimes.Modal.create = function($window){
  return new Modal($window);
};