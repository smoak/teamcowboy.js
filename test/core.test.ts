import { TeamCowboy } from "../src/core";

describe("TeamCowboy", () => {
  const tc = new TeamCowboy({
    privateApiKey: "privateKey",
    publicApiKey: "publicKey",
  });

  it("should have test methods", () => {
    expect(tc.Test).toBeDefined();
  });
});
