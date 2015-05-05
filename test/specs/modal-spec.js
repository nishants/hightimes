var $modalWindow = function () {return $("#select-user-dialog");},
    modal,
    modalHTML =  '    <div id="select-user-dialog" class="modal-window hidden centered bg-high-blue hidden">   '
                +'      <div class="close-modal btn bad-action">X</div>'
                +'      <p class="modal-message">Please select correct username to continue</p>'
                +'      <form >'
                +'        <div id="option-1" class="username-option btn pull-left "> nishant.singh87</div>'
                +'        <div id="option-2" class="username-option btn pull-left "> nishant.singh</div>'
                +'        <div id="option-3" class="username-option btn pull-left "> nishant.s87</div>'
                +'      </form>'
                +'    </div>';


QUnit.module('Modal Dialog', {
  setup: function () {
    $("#qunit-fixture").append(modalHTML);
  }
});

QUnit.test("Should render modal window", function (assert) {
  modal = window.hightimes.Modal.create($("#select-user-dialog"));

  assert.ok(modal, "Create modal");
  
  modal.show();

  assert.ok($modalWindow().is(":visible"), "Modal should be visible on show()");
});
