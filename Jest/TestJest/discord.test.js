import { ping } from "./discordMessage.js";

describe("Discord", function () {
  it("should dm the user", async function () {
    const message = {
      delete: jest.fn().mockResolvedValue({}),
    };

    await ping(message);
    expect(message.delete).toHaveBeenCalled();
  });
});
