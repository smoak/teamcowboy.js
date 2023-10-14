import { Client } from "../../types";
import { Get, getRequest } from "./get";
import { Post, postRequest } from "./post";

export type TestMethods = {
  readonly getRequest: Get;
  readonly postRequest: Post;
};

const methods = (client: Client): TestMethods => {
  return {
    getRequest: (testParam) => getRequest(client, testParam),
    postRequest: (testParam) => postRequest(client, testParam),
  };
};

export default methods;
