(function () {
  "user strict"

  var
      dayOfWeekOf = function (unixTime) {
        return new Date(1000 * unixTime).getDay();
      },

      hoursOfDayOf = function (unixTime) {
        return new Date(1000 * unixTime).getHours();
      },

      newMatrix = function (slotsPerDay) {
        var matrix = new Array(7);
        for (var i = 0; i < matrix.length; i++) {
          var daySlots = new Array(slotsPerDay);
          for (var j = 0; j < daySlots.length; j++) {
            daySlots[j] = 0;
          }
          matrix[i] = daySlots
        }
        return matrix;
      },

      slotsPerDay = function (periodLength) {
        return Math.floor(24 / periodLength);
      };
  ;

  var UserActivityMatrix = function (periodLengthInHours) {
    this.intervalInHours = periodLengthInHours;
    this.matrix = newMatrix(slotsPerDay(periodLengthInHours));
  };


  UserActivityMatrix.prototype.slotsPerDay = function () {
    return this.matrix[0].length;
  }

  UserActivityMatrix.prototype.add = function (activity) {
    var unixTime = parseInt(activity.created_time);

    var time = {
      day: dayOfWeekOf(unixTime),
      slot: Math.floor(hoursOfDayOf(unixTime) / this.intervalInHours)
    };

    this.matrix[time.day][time.slot] = (this.matrix[time.day][time.slot] + 1)
  };

  UserActivityMatrix.prototype.get = function (dayOfWeek, period) {
    return this.matrix[dayOfWeek][period];
  };

  hightimes.UserActivityMatrix = UserActivityMatrix;
}).call(this);
