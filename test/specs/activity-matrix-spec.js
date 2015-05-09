var matrix,
    periodLengthInHours = 3,
    toUnixTime = function (time) {
      return Date.parse(time) / 1000;
    };


QUnit.module('UserActivityMatrix', {
  setup: function () {
    matrix = new hightimes.newActivityMatrix(periodLengthInHours);
  }
});

QUnit.test("Should create slots by periodLengthInHours, 8 by default", function (assert) {
  assert.equal(new hightimes.UserActivityMatrix(1).slotsPerDay(), 24, "Should create slots by the size of periods in hours");
  assert.equal(new hightimes.UserActivityMatrix(24).slotsPerDay(), 1, "Should create slots by the size of periods in hours");
  assert.equal(new hightimes.UserActivityMatrix(12).slotsPerDay(), 2, "Should create slots by the size of periods in hours");

  assert.equal(new hightimes.newActivityMatrix(3).slotsPerDay(), 8, "Should create slots by the size of periods in hours");
});

QUnit.test("Should add activity by its created_time", function (assert) {
  var
      matrix = hightimes.newActivityMatrix(),

      sunday    = 0,
      monday    = 1,
      tuesday   = 2,
      wednesday = 3,
      thursday  = 4,
      friday    = 5,
      saturday  = 6,

      am12to03 = 0,
      am03to06 = 1,
      am06to09 = 2,
      am09to12 = 3,

      pm12to03 = 4,
      pm03to06 = 5,
      pm06to09 = 6,
      pm09to12 = 7,

      activityAt = function (time) {
        return {created_time: toUnixTime(time)};
      };

  // Sunday
  matrix.add(activityAt("May 03, 2015 00:00:01"));
  matrix.add(activityAt("May 10, 2015 02:59:59"));
  matrix.add(activityAt("May 17, 2015 21:13:15"));

  // Monday
  matrix.add(activityAt("May 04, 2015 08:59:59"));
  matrix.add(activityAt("May 11, 2015 07:21:01"));
  matrix.add(activityAt("May 18, 2015 18:01:00"));

  // Tuesday
  matrix.add(activityAt("May 05, 2015 05:00:00"));

  // Wednesday
  matrix.add(activityAt("May 13, 2015 03:59:59"));

  // Thursday
  matrix.add(activityAt("May 14, 2015 13:59:59"));

  // Friday
  matrix.add(activityAt("May 15, 2015 16:00:00"));

  //Saturday
  matrix.add(activityAt("May 02, 2015 09:21:01"));
  matrix.add(activityAt("May 16, 2015 11:59:00"));

  matrix.add(activityAt("May 23, 2015 12:00:01"));
  matrix.add(activityAt("May 09, 2015 14:59:59"));

  matrix.add(activityAt("May 16, 2015 15:00:01"));
  matrix.add(activityAt("May 23, 2015 16:45:45"));
  matrix.add(activityAt("May 23, 2015 17:59:59"));


  assert.equal(matrix.get(sunday, am12to03), 2, "sunday, am12to03");
  assert.equal(matrix.get(sunday, pm09to12), 1, "sunday, pm09to12");

  assert.equal(matrix.get(monday, am06to09), 2, "monday, am06to09");
  assert.equal(matrix.get(monday, pm06to09), 1, "monday, pm06to09");

  assert.equal(matrix.get(tuesday, am03to06), 1, "sunday, pm09to12");
  assert.equal(matrix.get(wednesday, am03to06), 1, "tuesday, am03to06");
  assert.equal(matrix.get(thursday, pm12to03), 1, "thursday, pm12to03");
  assert.equal(matrix.get(friday, pm03to06), 1, "friday, pm03to06");

  assert.equal(matrix.get(saturday, am09to12), 2, "saturday, am09to12");
  assert.equal(matrix.get(saturday, pm12to03), 2, "saturday, pm12to03");
  assert.equal(matrix.get(saturday, pm03to06), 3, "saturday, pm03to06");
});

