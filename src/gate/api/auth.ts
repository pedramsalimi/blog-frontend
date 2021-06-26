import type {} from "@types";

import gate from "../gate";
import client from "../http-clients/auth";

const auth = {
  refresh: (params: any) =>
    gate.post<any, never, any>({
      client,
      url: "TokenAuth/RefreshToken",
      data: undefined,
      params: params,
    }),
};

export default auth;
