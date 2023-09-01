export type RequiredParams = {
  readonly api_key: string;
  readonly method: string;
  readonly timestamp: string;
  readonly nonce: string;
  readonly sig: string;
};

export type MethodParams<T extends ApiParams> = {
  [Property in keyof T]: T[Property];
};

export type RequestParams<T extends ApiParams> = MethodParams<T> &
  RequiredParams;

export type AuthenticatedRequestParams<T extends ApiParams> =
  RequestParams<T> & {
    readonly userToken: string;
  };

export type ApiParams = {
  readonly method: string;
};

export type RequestOptions = {
  readonly httpMethod: "GET" | "POST";
};

export type ParamsWithoutSig<T extends ApiParams> = Omit<
  RequiredParams,
  "sig"
> &
  T;

export type TCResponse<T> = TCSuccessResponse<T>;

export type TCErrorResponse = {
  readonly success: false;
  readonly requestSecs: number;
  readonly body: {
    readonly error: {
      readonly errorCode: string;
      readonly httpResponse: number;
      readonly message: string;
    };
  };
};

export type TCSuccessResponse<T> = {
  readonly success: true;
  readonly requestSecs: number;
  readonly body: T;
};
