import type {
  ApiTokenauthRefreshtokenPostParams,
  RefreshTokenResult,
  AuthenticateModel,
  AuthenticateResultModel,
} from "@types";

import gate from "../gate";
import client from "../http-clients/auth";

const auth = {
  refresh: (params: ApiTokenauthRefreshtokenPostParams) =>
    gate.post<RefreshTokenResult, never, ApiTokenauthRefreshtokenPostParams>({
      client,
      url: "TokenAuth/RefreshToken",
      data: undefined,
      params: params,
    }),
  login: (data: AuthenticateModel) =>
    gate.post<AuthenticateResultModel, AuthenticateModel>({
      client,
      url: "/TokenAuth/Authenticate",
      data,
    }),
};

export default auth;
