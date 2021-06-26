import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  Method,
} from "axios";

export interface GateRequest<D, P> {
  client: AxiosInstance;
  method: Method;
  url: string;
  data?: D;
  params?: P;
  isForm?: boolean;
}

export type RequiredProp<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> &
  Required<Pick<T, K>>;
export type GateMethodRequest<D, P> = Omit<
  GateRequest<D, P>,
  "method" | "isForm"
>;

export interface RequestMeta<T, D, P> {
  request: AxiosRequestConfig;
  cancel: (message?: string | undefined) => void;
  fetch: (showApiError?: boolean) => Promise<T>;
  page: (
    req: Pick<GateRequest<D, P>, "data" | "params">,
    showApiError?: boolean
  ) => Promise<T>;
}
export type ValidationError<T> = {
  members: (keyof T)[];
  message: string;
};
export type ErrorMeta<T = unknown> = {
  code: number;
  details: string;
  message: string;
  validationErrors?: ValidationError<T>[] | null;
};

export type ApiResponse<T = never> = {
  result: T;
  success: boolean;
  targetUrl: string | null;
};
export type ErrorResponse<T = never> = {
  error: ErrorMeta<T>;
  unAuthorizedRequest: boolean;
  __abp: boolean;
  canceled?: boolean;
  __internal?: boolean;
  faildRequest?: boolean;
  stack?: AxiosError<any>;
};
