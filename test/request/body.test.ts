import { create } from "../../src/request/body";

describe("#create", () => {
  describe("with an auth token", () => {
    let requestStr: ReturnType<typeof create>;

    beforeEach(() => {
      requestStr = create({
        api_key: "b412e0601e179ad12df1a0ff5b8da12aafb74a3d",
        method: "Team_Get",
        teamId: "1234",
        nonce: "5646464564",
        timestamp: "1296268551",
        userToken: "0bd5a0ed9ff7f4c59e1854b63b341a8f",
      });
    });

    it("should return the concatenated request string", () => {
      expect(requestStr).toEqual(
        "api_key=b412e0601e179ad12df1a0ff5b8da12aafb74a3d&method=team_get&nonce=5646464564&teamid=1234&timestamp=1296268551&usertoken=0bd5a0ed9ff7f4c59e1854b63b341a8f",
      );
    });
  });

  describe("without an auth token", () => {
    let requestStr: ReturnType<typeof create>;

    beforeEach(() => {
      requestStr = create({
        api_key: "b412e0601e179ad12df1a0ff5b8da12aafb74a3d",
        method: "Team_Get",
        teamId: "1234",
        nonce: "5646464564",
        timestamp: "1296268551",
      });
    });

    it("should return the concatenated request string", () => {
      expect(requestStr).toEqual(
        "api_key=b412e0601e179ad12df1a0ff5b8da12aafb74a3d&method=team_get&nonce=5646464564&teamid=1234&timestamp=1296268551",
      );
    });
  });
});
