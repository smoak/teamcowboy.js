import { Client } from "../../types.js";
import { Get, getRequest } from "./get.js";
import { Post, postRequest } from "./post.js";

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
