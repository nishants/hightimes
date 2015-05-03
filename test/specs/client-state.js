var clientState;

QUnit.module('ClientState', {
  setup: function() {
    clientState = new window.hightimes.ClientState();
  }
});

QUnit.test( "Encode username", function( assert ) {
  assert.equal( clientState.encodeUserName("nishant_singh-2"), "username_nishant_singh-2", "should encode username");
  assert.equal( clientState.encodeUserName("nishant"), "username_nishant", "should encode username");
});


QUnit.test( "Encode  userid", function( assert ) {
  assert.equal( clientState.encodeUserId("101"), "userid_101", "should encode userid");
});