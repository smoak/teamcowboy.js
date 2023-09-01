import { create } from "../../src/request/signature";

describe("#create", () => {
  let sig: ReturnType<typeof create>;
  const privateApiKey = "413abdc2120adb9a06eb13cf76483aa25d18dc5a";

  const params = {
    api_key: "b412e0601e179ad12df1a0ff5b8da12aafb74a3d",
    method: "Team_Get",
    nonce: "5646464564",
    timestamp: "1296268551",
    userToken: "0bd5a0ed9ff7f4c59e1854b63b341a8f",
    teamId: 1234,
  };

  beforeEach(() => {
    sig = create({
      privateApiKey,
      httpMethod: "GET",
      params,
    });
  });

  it("should generate the expected signature", () => {
    expect(sig).toEqual("cde63d18f2e4b906891bcfdcc0f47c7135412ad5");
  });
});
