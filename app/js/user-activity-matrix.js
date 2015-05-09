(function () {
  "user strict"

  var dayOfWeekOf = function(unixTime){
    return new Date(1000 * unixTime).getDay();
  };
  var hoursOfDayOf = function(){
    return new Date(1000 * unixTime).getHours();
  };

  var UserActivityMatrix = function (periodLengthInHours) {
    this.intervalInHours = periodLengthInHours;
    var matrix = [];
    for (var i = 1; (i * periodLengthInHours) <= 24; i++) {
      matrix.push([]);
    }
    this.matrix = matrix;
  };

  UserActivityMatrix.prototype.slotsPerDay = function () {
    return this.matrix.length;
  }

  UserActivityMatrix.prototype.add = function (activity) {
    var unixTime = activity.created_time;
    var dayOfWeek = dayOfWeekOf(unixTime);
    var period    = hoursOfDayOf(unixTime)/this.intervalInHours;
    return this.matrix[dayOfWeek][period];
  };

  UserActivityMatrix.prototype.activityAt = function (dayOfWeek, period) {
    return this.matrix[dayOfWeek][period];
  };

  hightimes.UserActivityMatrix = UserActivityMatrix;
}).call(this);
