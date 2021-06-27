import type { SWRConfiguration, SWRResponse } from "swr";
import type { ApiResponse, ErrorResponse, RequestMeta } from "@types";

import { useRouter } from "next/router";
import useSWR from "swr";

interface Return<Data>
  extends Pick<
    SWRResponse<ApiResponse<Data>, ErrorResponse<Data>>,
    "isValidating" | "revalidate" | "error" | "mutate"
  > {
  data: ApiResponse<Data> | undefined;
  loading: boolean;
}

export interface Config<Data = unknown>
  extends Omit<
    SWRConfiguration<ApiResponse<Data>, ErrorResponse<Data>>,
    "initialData"
  > {
  initialData?: ApiResponse<Data>;
}

export default function useRequest<Response = unknown, D = unknown, P = unknown>(
  meta: RequestMeta<ApiResponse<Response>, D, P> | null | undefined,
  { initialData, ...config }: Config<Response> = {},
  keys: any[] | null = [],
  showErrorToast = false
): Return<Response> {
  const { locale } = useRouter();
  const { data: response, error, isValidating, revalidate, mutate } = useSWR<
    ApiResponse<Response>,
    ErrorResponse<Response>
  >(
    keys && meta ? [JSON.stringify(meta.request), locale, ...keys] : null,
    meta ? () => meta.fetch(showErrorToast) : null,
    {
      ...config,
      initialData,
    }
  );

  return {
    data: response,
    error,
    isValidating,
    loading: !response && !error,
    revalidate,
    mutate,
  };
}
