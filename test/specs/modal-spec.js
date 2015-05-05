var $modalWindow = function () {return $("#select-user-dialog");},
    modal,
    modalHTML =  '    <div id="select-user-dialog" class="modal-window hidden centered bg-high-blue hidden">   '
                +'      <div class="close-modal btn bad-action">X</div>'
                +'      <p class="modal-message">Please select correct username to continue</p>'
                +'      <form >'
                +'        <div id="sample-option" class="username-option btn pull-left "> nishant.singh87</div>'
                +'      </form>'
                +'    </div>';


QUnit.module('Modal Dialog', {
  setup: function () {
    $("#qunit-fixture").append(modalHTML);
  }
});

QUnit.test("Should show modal window", function (assert) {

  modal = window.hightimes.Modal.create($modalWindow(), []);

  assert.ok(modal, "Create modal");

  modal.show();

  assert.ok($modalWindow().is(":visible"), "Modal should be visible on show()");
});

QUnit.test("Should render options", function (assert) {
  modal = window.hightimes.Modal.create($modalWindow(), ["option1", "option2", "option3"]);
  modal.show();

  var option = function (number) {
    return $modalWindow().find(".username-option:visible").get(number).innerHTML.trim();
  };

  assert.equal(option(0), "option1", "should render all options");
  assert.equal(option(1), "option2", "should render all options");
  assert.equal(option(2), "option3", "should render all options");
});
