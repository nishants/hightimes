(function () {
  "use strict"
  var dayLabels = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  var periodLabels = [
    "00AM - 03AM",
    "03AM - 06AM",
    "06AM - 09AM",
    "09AM - 12PM",
    "12PM - 03PM",
    "03PM - 06PM",
    "06PM - 09PM",
    "09PM - 12PM",
  ];

  var notLabeled = function ($page) {
    return "" == $page.find(".indicator").first().html().trim();
  };

  var renderLabels = function ($page) {
    for (var day = 0; day < 7; day++) {
      for (var period = 0; period < 8; period++) {
        var slotLabel = $page.find("#indicator" + day + "" + period);
        slotLabel.append(periodLabels[period] + "<br>" + dayLabels[day]);
      }
    }
  };

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

    var setProfilePic = function (url) {
      $("#user-profile-pic").attr("src", url);
    };

    var setUserName = function (name) {
      $("#userfullname").html(name);
    };

    var render = function () {
      setProfilePic(user.profile_picture);
      setUserName(user.full_name)
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
      return this;
    };
  };

  hightimes.showDashboard = function ($page, user, activityMatrix) {
    if (notLabeled($page)) {
      renderLabels($page);
    }
    return new DashBoard($page, user, activityMatrix).show();
  };

}).call(this);