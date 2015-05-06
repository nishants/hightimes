(function () {
  "use strict"
  var DashBoard = function ($page, user, activityMatrix) {

    var weight = function (value) {
      if (!value) return 0;

      if (value > activityMatrix.average()) return 2;
      if (value < activityMatrix.average()) return 0;
      return 1;
    };

    var indicatorAt = function (day, period) {
      return {
        "set": function (weight) {
          $("#indicator" + day + "" + period).removeClass("indicator-level-0");
          $("#indicator" + day + "" + period).removeClass("indicator-level-1");
          $("#indicator" + day + "" + period).removeClass("indicator-level-2");

          $("#indicator" + day + "" + period).addClass("indicator-level-" + weight);
        }
      };
    };

    var render = function () {
      for (var day = 0; day < 7; day++) {
        for (var period = 0; period < 8; period++) {
          var indicatorWeight = weight(activityMatrix.activityAt(day, period));
          indicatorAt(day, period).set(indicatorWeight);
        }
      }
    };

    this.show = function () {
      $page.show();
      render();
    };
  };

  hightimes.showDashboard = function ($page, user, activityMatrix) {
    return new DashBoard($page, user, activityMatrix).show();
  };

}).call(this);