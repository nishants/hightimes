var Modal = function($window, onShow, onClose){
  this.window = $window;
  this.onShow = onShow;
  this.onClose = onClose;
};

Modal.prototype.close = function(){
  this.window.hide();
  this.onClose();
};

Modal.prototype.show = function(){
  this.window.show("slow", "swing");
  this.onShow();
};

window.hightimes.Modal = {};
window.hightimes.Modal.create = function($window, onShow, onClose){
  return new Modal($window, onShow, onClose);
};