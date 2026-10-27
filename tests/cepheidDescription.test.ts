import { test } from "node:test";
import assert from "node:assert/strict";
import { previewCepheidDescription } from "../src/lib/cepheidDescription.ts";

for (const length of [19, 20, 21]) {
  test(`description with ${length} Cyrillic code points`, () => {
    const description = "я".repeat(length);
    const result = previewCepheidDescription(description);
    assert.equal(Array.from(result.preview).length, Math.min(length, 20));
    assert.equal(result.isLong, length > 20);
  });
}
test("non-BMP characters count as one code point without splitting surrogates", () => {
  const result = previewCepheidDescription("я".repeat(19) + "🌟" + "а");
  assert.equal(result.preview, "я".repeat(19) + "🌟");
  assert.equal(result.isLong, true);
  assert.deepEqual(previewCepheidDescription("🌟".repeat(20)), {
    preview: "🌟".repeat(20),
    isLong: false,
  });
});
test("empty description has no disclosure", () => {
  assert.deepEqual(previewCepheidDescription(""), {
    preview: "",
    isLong: false,
  });
});
