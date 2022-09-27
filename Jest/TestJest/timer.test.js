import { sleep } from "./timer.js";

describe("Pack test", function () {
  it.concurrent("should wait 3 sec", async function () {
    const t = Date.now();
    await sleep(3);
    expect(Date.now() - t).toBeGreaterThanOrEqual(3000);
  });

  it.concurrent("should wait 2 sec", async function () {
    const t = Date.now();
    await sleep(2);
    expect(Date.now() - t).toBeGreaterThanOrEqual(2000);
  });
});
