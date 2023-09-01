import type { Client } from "../../src/types";
import { create } from "../../src/request/params";
import axios from "axios";

describe("#create", () => {
  describe("when the client is not authenticated", () => {
    let rp: ReturnType<typeof create>;
    const client: Client = {
      privateApiKey: "private",
      publicApiKey: "public",
      axiosInstance: axios.create(),
    };

    beforeEach(() => {
      rp = create({
        client,
        httpMethod: "GET",
        params: {
          method: "SomeMethod",
        },
        overrides: { timestamp: "timestamp", nonce: "nonce" },
      });
    });

    it("should add the public api key", () => {
      expect(rp.api_key).toBe("public");
    });

    it("should add the method", () => {
      expect(rp.method).toBe("SomeMethod");
    });

    it("should add the timestamp", () => {
      expect(rp.timestamp).toBe("timestamp");
    });

    it("should add the nonce", () => {
      expect(rp.nonce).toBe("nonce");
    });
  });

  describe("when the client is authenticated", () => {
    let rp: ReturnType<typeof create<{ teamId: string; method: "Team_Get" }>>;
    const client: Client = {
      privateApiKey: "413abdc2120adb9a06eb13cf76483aa25d18dc5a",
      publicApiKey: "b412e0601e179ad12df1a0ff5b8da12aafb74a3d",
      auth: "0bd5a0ed9ff7f4c59e1854b63b341a8f",
      axiosInstance: axios.create(),
    };

    beforeEach(() => {
      rp = create<{ teamId: string; method: "Team_Get" }>({
        client,
        httpMethod: "GET",
        params: {
          method: "Team_Get",
          teamId: "1234",
        },
        overrides: { timestamp: "1296268551", nonce: "5646464564" },
      });
    });

    it("generates the correct sig", () => {
      expect(rp.sig).toEqual("cde63d18f2e4b906891bcfdcc0f47c7135412ad5");
    });

    it("should add the team id api param", () => {
      expect(rp["teamId"]).toBe("1234");
    });
  });
});
