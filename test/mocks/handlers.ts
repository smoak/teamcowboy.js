import { http, HttpHandler, HttpResponse, HttpResponseResolver } from "msw";

const testGetRequestResolver: HttpResponseResolver = ({ request }) => {
  const testParam = new URL(request.url).searchParams.get("testParam");
  const jsonResponse = {
    success: true,
    requestSecs: 0.0025179386138916,
    body: {
      helloWorld:
        "You successfully called the test method! No value was passed in for the 'testParam' parameter.",
    },
  };

  if (testParam) {
    jsonResponse["body"]["helloWorld"] =
      `You successfully called the test method! The value you passed in for 'testParam' was: ${testParam}`;
  }

  return HttpResponse.json(jsonResponse);
};

type ApiMethod = "Test_GetRequest";

const ApiMethodsToResolver: Record<ApiMethod, HttpResponseResolver> = {
  Test_GetRequest: testGetRequestResolver,
};

const getResponseResolver: HttpResponseResolver = (info) => {
  const { request } = info;
  const apiMethod = new URL(request.url).searchParams.get("method");

  if (!apiMethod) {
    return HttpResponse.json({}, { status: 404 });
  }

  const resolver = ApiMethodsToResolver[apiMethod as ApiMethod];

  return resolver(info);
};

export const handlers: HttpHandler[] = [http.get("*", getResponseResolver)];
