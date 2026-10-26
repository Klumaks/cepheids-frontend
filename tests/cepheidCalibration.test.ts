import { test } from "node:test";
import assert from "node:assert/strict";
import { CEPHEID_CLASSES } from "../src/data/cepheidClasses.ts";
import {
  INITIAL_CEPHEID_RANGE,
  cepheidRangeError,
  filterCepheidClasses,
  nextCepheidClass,
} from "../src/lib/cepheidCalibration.ts";
test("default range includes all mock classes and IDs are unique", () => {
  assert.equal(
    filterCepheidClasses(CEPHEID_CLASSES, INITIAL_CEPHEID_RANGE).length,
    CEPHEID_CLASSES.length,
  );
  assert.equal(
    new Set(CEPHEID_CLASSES.map((c) => c.id)).size,
    CEPHEID_CLASSES.length,
  );
});
test("exact negative boundaries are inclusive for both coefficients", () => {
  assert.deepEqual(
    filterCepheidClasses(CEPHEID_CLASSES, {
      min_slope: -2.76,
      max_slope: -2.76,
      min_b: -1.4,
      max_b: -1.4,
    }).map((c) => c.id),
    [1, 5],
  );
});
test("valid range with no matches is empty", () => {
  assert.deepEqual(
    filterCepheidClasses(CEPHEID_CLASSES, {
      min_slope: -5,
      max_slope: -4.9,
      min_b: -5,
      max_b: 0,
    }),
    [],
  );
});
test("rejects reversed slope and intercept ranges", () => {
  assert.match(
    cepheidRangeError({
      ...INITIAL_CEPHEID_RANGE,
      min_slope: 0,
      max_slope: -1,
    }),
    /наклон/,
  );
  assert.match(
    cepheidRangeError({ ...INITIAL_CEPHEID_RANGE, min_b: 0, max_b: -1 }),
    /свободный член/,
  );
  assert.equal(cepheidRangeError(INITIAL_CEPHEID_RANGE), "");
});
test("feed cycles through the filtered sequence and wraps", () => {
  const classes = [CEPHEID_CLASSES[0], CEPHEID_CLASSES[4]];
  assert.equal(nextCepheidClass(classes, 1)?.id, 5);
  assert.equal(nextCepheidClass(classes, 5)?.id, 1);
  assert.equal(nextCepheidClass([classes[0]], 1)?.id, 1);
  assert.equal(nextCepheidClass([], 1), undefined);
});
