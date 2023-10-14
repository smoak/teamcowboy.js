import { GetResponse, getRequest } from "../../../src/methods/test/get";
import { createClient } from "../../mocks/client";

describe("getRequest", () => {
  describe("with a successful response when called with no test param", () => {
    let response: GetResponse;

    beforeEach(async () => {
      const client = createClient();

      response = await getRequest(client);
    });

    it("should be successful", () => {
      expect(response.success).toBe(true);
    });

    it("should have a body field", () => {
      expect(response.body).toBeDefined();
    });

    it("should have a body field with the proper helloWorld field value", () => {
      expect(response.body.helloWorld).toEqual(
        "You successfully called the test method! No value was passed in for the 'testParam' parameter.",
      );
    });
  });

  describe("with a successful response when called with a test param", () => {
    let response: GetResponse;

    beforeEach(async () => {
      const client = createClient();

      response = await getRequest(client, "foo");
    });

    it("should be successful", () => {
      expect(response.success).toBe(true);
    });

    it("should have a body field", () => {
      expect(response.body).toBeDefined();
    });

    it("should have a body field with the proper helloWorld field value", () => {
      expect(response.body.helloWorld).toEqual(
        "You successfully called the test method! The value you passed in for 'testParam' was: foo",
      );
    });
  });
});
