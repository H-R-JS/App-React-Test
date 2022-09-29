import { ping } from "./discordMessage.js";

describe("Discord", function () {
  it("should dm the user", async function () {
    const channelMock = {
      send: jest.fn(),
    };
    const createDMMock = jest.fn().mockResolvedValue(channelMock);
    const message = {
      delete: jest.fn().mockResolvedValue({}),
      reply: jest.fn(),
      author: {
        createDM: createDMMock,
      },
    };

    await ping(message);
    expect(message.delete).toHaveBeenCalled();
    expect(channelMock.send).toHaveBeenCalledWith("pong");
  });

  it("should reply to the user if dm are desactived", async function () {
    const createDMMock = jest.fn().mockRejectedValue({});
    const message = {
      delete: jest.fn().mockResolvedValue({}),
      reply: jest.fn(),
      author: {
        createDM: createDMMock,
      },
    };

    await ping(message);
    expect(message.delete).toHaveBeenCalled();
    expect(message.reply).toHaveBeenCalledWith("pong");
  });
});
