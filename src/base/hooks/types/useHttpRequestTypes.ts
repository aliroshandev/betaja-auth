import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Ref } from "react";

export enum ReducerActionType {
  PENDING = "PENDING",
  RESOLVED = "RESOLVED",
  REJECTED = "REJECTED",
  UNMOUNT = "UNMOUNT",
}

export interface stateReducerType {
  response?: {} | null;
  status?: string;
  isFetching?: boolean;
  error?:
    | string
    | {
        message: string;
      }
    | null;
  type?: keyof typeof ReducerActionType;
}

export interface paramsType {
  page?: number | string;
  size?: number | string;
  sort?: string;
}

export interface requestType extends AxiosRequestConfig {
  method: any;
  url: string;
  headers?: {};
  token?: boolean;
  data?: {} | null;
  params?: paramsType;
  timeout?: number;
}

export interface responseType extends AxiosResponse {
  message?: string | { message: string };
}

export interface responseErrorType {
  response: any;
  message?: string;
  status?: number;
}

export interface sendRequestInputType {
  method: string;
  endpoint: string;
  query?: null | {
    page?: number | string;
    size?: number | string;
    sort?: string;
  };
  data?: null | {};
  headers?: {};
  pagination?: boolean;
  baseUrl?: string;
  onSuccess?: any;
  onError?: any;
  enabled?: boolean;
}

export interface useHttpReturnType extends stateReducerType {
  sendRequest: (item: sendRequestInputType) => void;
  requestUnMount: Ref<boolean>;
  refetchApi: () => void;
}
