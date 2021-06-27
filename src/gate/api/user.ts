import type { GetMyProfileDetailOutput } from "@types";

import gate from "../gate";
import client from "../http-clients/api";

const userApi = {
  profile: () =>
    gate.get<GetMyProfileDetailOutput>({
      client,
      url: "/services/app/Profile/GetMyProfileDetail",
    }),
};

export default userApi;
