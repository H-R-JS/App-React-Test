import users from "./users.js";
import axios from "axios";

jest.mock("axios"); // à la place de renvoyer la version normal de axios sur chaque utilisation, il va renvoyer un mock

describe("Users", function () {
  beforeEach(() => {
    // avant chaque test
    axios.mockClear();
    // pour nettoyer le mock, le regénère à son état initial de mock
  });

  const fakeResponse = [{ name: "John Doe" }];

  it("should return last user", async () => {
    axios.get.mockResolvedValue({ data: fakeResponse });
    expect(await users.getLastUserName()).toBe("John Doe");
  });
  it("should return last user with fetch", async () => {
    fetch.mockResponseOnce(JSON.stringify(fakeResponse));
    expect(await users.getLastUserNameFetch()).toBe("John Doe");
  });
});
