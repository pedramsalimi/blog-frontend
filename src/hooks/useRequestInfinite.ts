import type {
  SWRInfiniteConfiguration,
  SWRInfiniteResponse,
} from "swr";
import type { ApiResponse, ErrorResponse, GateRequest, RequestMeta } from "@types";

import { useRouter } from "next/router";
import {
  useSWRInfinite,
} from "swr";


interface Return<Data>
  extends Pick<
    SWRInfiniteResponse<ApiResponse<Data>, ErrorResponse<Data>>,
    "isValidating" | "revalidate" | "error" | "mutate" | "size" | "setSize"
  > {
  data: ApiResponse<Data>[] | undefined;
  loading:boolean;
}

export interface Config<Data = unknown>
  extends Omit<
    SWRInfiniteConfiguration<ApiResponse<Data>, ErrorResponse<Data>>,
    "initialData"
  > {
  initialData?: ApiResponse<Data>[];
}

export default function useRequestInfinit<Response = unknown, D = unknown, P = unknown>(
  meta: RequestMeta<ApiResponse<Response>, D, P>,
  getPaginationParams:(page:number)=>Pick<GateRequest<D, P>, "data" | "params">,
  getKey: (page: number, prevData: ApiResponse<Response> | null) => boolean,
  { initialData, ...config }: Config<Response> = {},
  keys: any[] | null = [],
  showErrorToast = false
): Return<Response> {
  const { locale } = useRouter();
  const {
    data: response,
    error,
    isValidating,
    revalidate,
    mutate,
    size,
    setSize,
  } = useSWRInfinite<ApiResponse<Response>, ErrorResponse<Response>>(
    (page, previousPageData) => {
      if (!keys || !getKey(page, previousPageData)) return null; // reached the end

      return keys
        ? [JSON.stringify(meta.request), page, locale, ...keys]
        : null;
    },

    (_, page) =>
      meta.page(
        getPaginationParams(page),
        showErrorToast
      ),
    {
      ...config,
      initialData,
    }
  );

  return {
    data: response,
    error,
    loading: !response && !error,
    isValidating,
    size,
    revalidate,
    mutate,
    setSize,
  };
}
