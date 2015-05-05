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
    this.matrix = [[]];
  };

  UserActivityMatrix.prototype.addActivityAt = function (unixTime) {
    var dayOfWeek = dayOfWeekOf(unixTime);
    var period    = hoursOfDayOf(unixTime)/this.intervalInHours;
    return this.matrix[dayOfWeek][period];
  };

  UserActivityMatrix.prototype.activityAt = function (dayOfWeek, period) {
    return this.matrix[dayOfWeek][period];
  };

  hightimes.UserActivityMatrix = UserActivityMatrix;
}).call(this);
