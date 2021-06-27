import type { ApiTokenauthRefreshtokenPostParams, RefreshTokenResult } from "@types";

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
};

export default auth;
