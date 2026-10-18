const test = require("node:test");
const assert = require("node:assert/strict");

const { getStatusMessage } = require("./script");

test("Status message is correct", () => {
  assert.equal(
    getStatusMessage(),
    "Приложение работает успешно!"
  );
});
