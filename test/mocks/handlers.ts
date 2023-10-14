import {
  rest,
  PathParams,
  ResponseResolver,
  RestContext,
  RestRequest,
} from "msw";

type RestResponseResolver = ResponseResolver<
  RestRequest<never, PathParams<string>>,
  RestContext
>;

const testGetRequestResolver: RestResponseResolver = (req, res, ctx) => {
  const testParam = req.url.searchParams.get("testParam");
  const jsonResponse = {
    success: true,
    requestSecs: 0.0025179386138916,
    body: {
      helloWorld:
        "You successfully called the test method! No value was passed in for the 'testParam' parameter.",
    },
  };

  if (testParam) {
    jsonResponse["body"][
      "helloWorld"
    ] = `You successfully called the test method! The value you passed in for 'testParam' was: ${testParam}`;
  }

  return res(ctx.json(jsonResponse));
};

type ApiMethod = "Test_GetRequest";

const ApiMethodsToResolver: Record<ApiMethod, RestResponseResolver> = {
  Test_GetRequest: testGetRequestResolver,
};

const getResponseResolver: RestResponseResolver = (req, res, ctx) => {
  const apiMethod = req.url.searchParams.get("method");

  if (!apiMethod) {
    return res(ctx.status(400));
  }

  const resolver = ApiMethodsToResolver[apiMethod as ApiMethod];

  return resolver(req, res, ctx);
};

export const handlers = [rest.get("*", getResponseResolver)];
